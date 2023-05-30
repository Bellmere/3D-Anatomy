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
  get api () {
    return this.human;
  }
  updateNote(note, current = 0) {
    this.setPrevAction();
    this.currentAction = current;
    this.note = note;

  }

  reset() {
    this.setPrevAction();
    this.currentAction = 0;
    this.updateCamera();
  }

  setPrevAction() {
    this.prevSelectedAction =  this.listActions[this.currentAction] || {};
  }
  setIndexActiveAction(index) {
    if(index >= 0 && index < this.listActions.length) {
      this.setPrevAction();
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
    this._updateCamera(this.human, action, this.prevSelectedAction);
  }


  setActionById(id) {

    const findIndex = this.listActions.findIndex(item => item.id === id);

    if(findIndex !== -1) {
      this.setPrevAction();
      this.currentAction = findIndex;
      this.updateCamera();
    }

  }
  nextAction() {

    if (this.currentAction + 1 >= this.listActions.length) {
      return;
    }
    this.setPrevAction();
    this.currentAction = this.currentAction + 1;

    this.updateCamera();
  }

  prevAction() {

    if (this.currentAction - 1 < 0) {
      return;
    }
    this.setPrevAction();
    this.currentAction = this.currentAction - 1;
    this.updateCamera();
  }

}
