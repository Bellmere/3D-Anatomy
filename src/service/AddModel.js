import { collection, addDoc } from 'firebase/firestore';
import { db } from '../api/firebase/firebase';
import { DOC_MODELS } from '../constans/models';
export default class AddModel {
  table = DOC_MODELS;

  constructor({ uri, title }) {
    this.uri = uri;
    this.title = title;
  }

  async save() {
    const res = await addDoc(collection(db, this.table), {
      uri: this.uri,
      title: this.title,
    })

    console.log(res);
  }
}
