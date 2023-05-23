import HumanUpdateScreen from '../mixin/human-update-screen';
export default class HumanController {
  constructor() {
    this._human = new window.HumanAPI('myWidget');
    this.scenePicked = [];
    this.objectsShown = [];
    this.objectsSelected = [];
    this.labelsPicked = [];
    this.prevSelectedAction = null;
    Object.assign(this, HumanUpdateScreen);
    this.addEvent();
  }
  get api () {
    return this._human;
  }
  addEvent() {
    this.api.on('scene.picked', (pick) => {
      if(pick.position) {
        this.scenePicked.forEach(fn => fn(pick));
      }
    });

    this.api.on('scene.objectsShown', (objects) => {
      this.objectsShown.forEach(callback => callback(objects))
    })
    this.api.on('scene.objectsSelected', (objects) => {
      this.objectsSelected.forEach(callback => callback(objects))
    })

    this.api.on('labels.picked', picked => {
      this.labelsPicked.forEach(callback => callback(picked))
    })

  }
  updateCamera(action) {
    this._updateCamera(this.api, action, this.prevSelectedAction);
    this.prevSelectedAction = action;
  }
  subscribe(callback, type) {
    if(!this[type]) throw Error('not found type event')
    const find = this[type].find(fn => fn === callback);
    if (find === undefined) {
      this[type].push(callback);
    }

  }

  unsubscribe(callback, type) {
    if(!this[type]) throw Error('not found type event')
    this[type] = this[type].filter(fn => fn !== callback);
  }
}
