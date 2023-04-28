export default class HumanController {
  constructor() {
    this._human = new window.HumanAPI('myWidget');
    this.scenePicked = [];
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
  }

  subscribeScenePicked(callback) {
    const find = this.scenePicked.find(fn => fn === callback);
    if (find === undefined) {
      this.scenePicked.push(callback);
    }

  }

  unsubscribeScenePicked(callback) {
    this.scenePicked = this.scenePicked.filter(fn => fn !== callback);
  }
}
