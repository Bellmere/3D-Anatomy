import { makeAutoObservable } from 'mobx';
import Notes from '../notes/Notes';
export default class StoreCreate {
  constructor() {
    this.learn = new Notes({title: 'hello world', region: 'UPPER_LIMB'});
    makeAutoObservable(this);
  }

}
