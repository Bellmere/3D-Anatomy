import { makeAutoObservable } from 'mobx';


export default class HumanApi {
  constructor() {
    this.currentAction = null;
    this.note = null;
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

  restoreObjectShown(obj) {
    const newObj = {};
    for(let key in obj) {
      newObj[key] = false
    }

    return newObj;
  }

  updateCamera() {
    const action = this.listActions[this.currentAction];
    if(action === undefined) return;

    this.human.send("scene.selectObjects", action.objectsSelected);
    this.human.send('camera.set', {
      ...action.camera,
      animate: true,
      animationStyle: 'around',
    });

    this.human.send("scene.showObjects", this.restoreObjectShown(action.objectsShown));
    this.human.send("scene.showObjects", action.objectsShown);

    this.human.send("annotations.info", annotations => {
      this.sendAnnotations(action, annotations)
    })
  }

  sendAnnotations(action, annotations) {
      if (Object.keys(annotations).length) {
        for (let annotation in annotations) {
          this.human.send("annotations.destroy", annotation)
        }
      }
      if (action.labels) {
        if (action.labels.length > 0) {
          for (let annotation of action.labels){

            this.human.send("annotations.create", {
              annotationId: annotation.id,
              title: annotation.title,
              position: annotation.pos,
              labelOffset: annotation.offset
            })
          }
        }
      }
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
