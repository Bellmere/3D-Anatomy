import { makeAutoObservable } from 'mobx';
import { getDocs, collection, orderBy, query } from 'firebase/firestore';
import { db } from '../../api/firebase/firebase';
import Note from './Note';
export default class Notes {
  constructor({last_modified = null, region, structure = '', system = '', tags = [], title, uid = null, id = null}) {
    this.last_modified = last_modified;
    this.region = region;
    this.structure = structure;
    this.system = system;
    this.tags = tags;
    this.title = title;
    this.uid = uid;
    this.id = id;
    this.notes = [];
    makeAutoObservable(this);
  }
  * getSubCollection() {
    if(this.id !== null) {
      const subCollection = yield getDocs(query(collection(db, 'note_sets', this.id, 'notes'),  orderBy('order' )));
      const notes = [];
      subCollection.forEach(item => notes.push(new Note({...item.data(), id: item.id, parentId: this.id})))
      this.notes = notes;
    }
  }

  addNewNote(note) {
    this.notes.push(new Note({ content: '', id: null, order: this.notes.length, title: '', parentId: this.id }))
  }
}
