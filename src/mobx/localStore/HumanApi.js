import { makeAutoObservable } from 'mobx';
import HumanUpdateScreenMixin from '../../mixin/human-update-screen';

export default class HumanApi {
  constructor() {
    this.currentAction = null;
    this.note = null;
    this.prevSelectedAction = null;
    Object.assign(this, HumanUpdateScreenMixin);
    makeAutoObservable(this);
  }

  init() {
    this.human = new window.HumanAPI('myWidget');
  }

  updateNote(note, current = 0) {
    this.currentAction = current;
    this.note = note;
  }

  reset() {
    this.currentAction = 0;
    this.updateCamera();
  }

  setIndexActiveAction(index) {
    if(index >= 0 && index < this.listActions.length) {
      this.currentAction = index;
      this.updateCamera();
    }
  }
  get listActions() {
    return this.note?.actions || [];
  }
  updateCamera() {
    const action = this.listActions[this.currentAction];
    if(action === undefined || action === this.prevSelectedAction) return;
    this.prevSelectedAction = action;
    this._updateCamera(this.human, action);
  }


  setActionById(id) {

    const findIndex = this.listActions.findIndex(item => item.id === id);

    if(findIndex !== -1) {
      this.currentAction = findIndex;
      this.updateCamera();
    }

  }
  nextAction() {

    if (this.currentAction + 1 >= this.listActions.length) {
      return;
    }
    this.currentAction = this.currentAction + 1;

    this.updateCamera();
  }

  prevAction() {

    if (this.currentAction - 1 < 0) {
      return;
    }
    this.currentAction = this.currentAction - 1;
    this.updateCamera();
  }

}
