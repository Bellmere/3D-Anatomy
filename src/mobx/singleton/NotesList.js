import { makeAutoObservable } from 'mobx';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../api/firebase/firebase';
import Notes from '../notes/Notes';

export default class NotesList {
  constructor(root) {
    this.rootStore = root;
    this.list = [];
    this.loading = false;
    this.textSearch = '';
    makeAutoObservable(this);
  }


  get collection() {
    return collection(db, 'note_sets');
  }

  get listNotes() {
    if (!this.textSearch.trim()) {
      return this.list;
    }

    return this.list.filter(item => item.title?.toLowerCase().replace(/ /g, '').includes(this.textSearch?.toLowerCase()));
  }

  setSearch(text) {
    this.textSearch = text;
  }

  resetSearch() {
    this.textSearch = '';
  }

  getQuery(id) {
    if (typeof id === 'string') {
      return query(this.collection, where('region', '==', id.toUpperCase()));
    }
    return query(this.collection);
  }

  * getLearns(id) {
    this.loading = true;
    const data = yield getDocs(this.getQuery(id));
    this.list = [];
    data.forEach((item) => this.list.push(new Notes({ ...item.data(), id: item.id })));
    this.loading = false;
  }
}
