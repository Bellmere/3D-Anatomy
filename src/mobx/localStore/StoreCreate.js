import { makeAutoObservable } from 'mobx';
import { db, auth, app } from '../../api/firebase/firebase';
import { setDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Action from '../notes/Action';

class Notes {
  constructor({
                id = new Date().getTime().toString(),
                order = 1,
                content = '',
                title = '',
                actions = [],
                scene = '',
              } = {}) {
    this.id = id;
    this.order = order;
    this.content = content;
    this.title = title;
    this.actions = actions;
    this.selectedAction = null;
    this.scene = scene;
    makeAutoObservable(this);
  }

  resetActions() {
    this.actions = [];
    this.selectedAction = null;
  }

  setSelectedAction(id) {
    const find = this.actions.find(item => item.id === id);
    this.selectedAction = find || null;
  }

  setScene(scene) {
    this.scene = scene;
  }

  removeActionById(id) {
    this.actions = this.actions.filter(action => action.id !== id);
  }

  setTitle(title) {
    this.title = title;
  }

  setContent(content) {
    this.content = content;
  }

  getObjectSelected(capture) {
    const objectsSelected = {};
    for (let objectKey of capture.objects) {
      if (objectKey.selected) {
        objectsSelected[objectKey.objectId] = true;
      }
    }
    return objectsSelected;
  }


  updateAnnotation(capture, camera, objectsShown, title) {
    const actionData = {
      objectsShown,
      objectsSelected: this.getObjectSelected(capture),
    };
    this.selectedAction.update({ camera, labels: capture.labels, ...actionData, title });
  }

  addNewAnnotation(capture, camera, objectsShown, title) {
    const actionData = {
      objectsShown,
      objectsSelected: this.getObjectSelected(capture),
    };

    this.actions.push(new Action({ camera, labels: capture.labels, ...actionData, title }));
    if (this.actions.length) {
      this.selectedAction = this.actions[this.actions.length - 1];
    } else {
      this.selectedAction = null;
    }
  }
}

export default class StoreCreate {
  constructor() {
    this.isOpenedModalLearn = true;
    this.selectedNote = null;
    this.notes = [];
    this.data = {
      region: '',
      system: null,
      tags: [],
      title: '',
      uid: null,
      id: null,
    };
    this.edit = false;
    this.newScreen = false;
    makeAutoObservable(this);
  }

  toggleModalLearn() {
    this.isOpenedModalLearn = !this.isOpenedModalLearn;
  }

  get indexCurrentNote() {
    return this.notes.findIndex(note => note === this.selectedNote);
  }

  removeCurrentNote() {
    if (this.notes?.length === 1) {
      this.notes = [];
      this.addNewNote();
    } else {
      const index = this.indexCurrentNote;
      this.notes = this.notes.filter(note => note !== this.selectedNote);
      if (this.notes[index]) this.selectedNote = this.notes[index];
      else this.selectedNote = this.notes[index - 1];
    }

  }

  prevNote() {
    const prevNote = this.notes[this.indexCurrentNote - 1];
    this.selectedNote = prevNote ?? this.selectedNote;
  }

  nextNote() {
    const nextNote = this.notes[this.indexCurrentNote + 1];
    this.selectedNote = nextNote ?? this.selectedNote;
  }

  get actions() {
    return this.selectedNote?.actions || [];
  }

  setSelectedNote(id) {
    const find = this.notes.find(item => item.id === id);
    if (find) {
      this.selectedNote = find;
    }
  }

  setNewLearn(region, title) {
    this.data.region = region;
    this.data.title = title;
    const note = new Notes();
    this.notes.push(note);
    this.selectedNote = note;
    this.newScreen = true;
    this.toggleModalLearn();
  }

  addNewNote() {
    const note = new Notes();
    this.notes.push(note);
    this.selectedNote = note;
  }

  onEditMode() {
    this.edit = true;
    this.newScreen = false;
  }

  offEditMode() {
    this.edit = false;
  }

  get selectedAction() {
    return this.selectedNote?.selectedAction || {};
  }

  offMode() {
    this.offNewScreen();
    this.offEditMode();
  }

  get isEditScreen() {
    return this.edit || this.newScreen;
  }

  onNewScreen() {
    this.edit = false;
    this.newScreen = true;
  }

  offNewScreen() {
    this.newScreen = false;
  }

  async saveFirebase() {
    if (this.data.id === null) {
      return await this.addDocFirebase();
    } else {
      await this.updateDocFirebase()
    }

  }
  async updateDocFirebase() {

  }

  async addDocFirebase() {
    try {
      const docRef = await addDoc(collection(db, 'note_sets'), {
        ...this.data,
        uid: auth.currentUser.uid,
        last_modified: serverTimestamp(),
      });
      this.data.id = docRef.id;
      await this.saveNotes(this.data.id, this.notes);
      return docRef.id
    } catch (e) {
      console.log(e);
    }
  }

  async saveNotes(docId, notes) {
    let order = 0;
    for (const note of notes) {
      const noteRef = await addDoc(collection(db, 'note_sets', docId, 'notes'), {
        order,
        content: note.content,
        title: note.title,
        scene: note.scene,
      });
      order = order + 1;

      await this.saveActions(docId, noteRef.id, note.actions);
    }
  }

  async saveActions(docId, noteId, actions) {
    let order = 0;
    for (const action of actions) {
      await addDoc(collection(db, 'note_sets', docId, 'notes', noteId, 'actions'), {
        order,
        camera: action.camera,
        labels: action.labels,
        title: action.title,
        objectsSelected: action.objectsSelected,
        objectsShown: action.objectsShown,
      });
      order = order + 1;
    }
  }
}
