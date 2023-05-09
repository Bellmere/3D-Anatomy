import { makeAutoObservable, onBecomeObserved } from 'mobx';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { db } from '../../api/firebase/firebase';
export default class Note {
  constructor({  content, id = null, order, scene, title, parentId }) {
    this.content = content;
    this.id = id;
    this.order = order;
    this.scene = scene;
    this.title = title;
    this.actions = [];
    this.parentId = parentId;
    makeAutoObservable(this);
    onBecomeObserved(this, 'actions', this.getActions.bind(this))
  }

  * getActions() {
    if(this.actions.length === 0) {
      const subCollection = yield getDocs(query(collection(db, 'note_sets', this.parentId, 'notes', this.id, 'actions'), orderBy('order')));
      const actions = [];
      subCollection.forEach(item => actions.push(item.data()));
      this.actions = actions;
    }
  }
}
