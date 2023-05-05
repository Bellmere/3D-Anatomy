import { makeAutoObservable } from 'mobx';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../api/firebase/firebase';
import Notes from '../notes/Notes';
export default class Viewer {
  constructor() {
    this.learn = {}
    this.selectedIndex = 0;
    makeAutoObservable(this);
  }

  get listNotes() {
    return this.learn?.notes || [];
  }
  get lengthNotes() {
    return this.learn?.notes?.length || 0;
  }
  nextNote() {
    if(this.selectedIndex < this.lengthNotes-1) {
      this.selectedIndex = this.selectedIndex + 1;
    }
  }

  reset() {
    this.selectedIndex = 0;
  }
  prevNote() {
    if(this.selectedIndex  > 0) {
      this.selectedIndex = this.selectedIndex - 1;

    }
  }
  get noteSelected() {
    return Array.isArray(this?.learn.notes) ? this.learn.notes[this.selectedIndex] : null;
  }

  get title () {
    return this.learn?.title || '';
  }

  * getSubCollection() {
     yield this.learn.getSubCollection();
  }
  * getSingleLearnById(id) {
    let docRef = yield getDoc(doc(db, `note_sets`, id));
    this.learn = new Notes({...docRef.data(), id: docRef.id});
    yield this.learn.getSubCollection();
  }

}
