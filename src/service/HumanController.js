import HumanUpdateScreen from '../mixin/human-update-screen';

export default class HumanController {
  constructor() {
    this._human = new window.HumanAPI('myWidget');
    this.scenePicked = [];
    this.objectsShown = [];
    this.objectsSelected = [];
    this.labelsPicked = [];
    this.selectedElement = [];
    this.prevSelectedAction = null;
    this.pickColorObjectSelect = false;
    this.selectedObject = {};
    this.colorObjectsId = {};
    this.selectedObjectItem = null;
    Object.assign(this, HumanUpdateScreen);
    this.addEvent();
  }

  get api() {
    return this._human;
  }

  getObjectSelected(capture) {
    const objectsSelected = {};
    for (let objectKey of capture.objects) {
      if (objectKey.selected) {
        objectsSelected[objectKey.objectId] = true;
      }
    }
    return objectsSelected;
  }

  enablePickColor() {
    this.api.send('scene.capture', (capture) => {
      this.selectedObject = this.getObjectSelected(capture);
      this.pickColorObjectSelect = true;
    });
  }
  reset(action) {
    this.prevSelectedAction = action;
    this.colorObjectsId = {};
  }
  resetSelected() {
    this.api.send('scene.capture', (capture) => {
      const objects = this.getObjectSelected(capture);
      for (const key in objects) {
        objects[key] = false;
      }
      this.api.send('scene.selectObjects', objects);
    });
  }

  resetLabels() {
    this.api.send('labels.info', (labels) => {
      for (const key in labels) {
        this.api.send('labels.destroy', key);
      }
    });
  }

  disablePickColor() {
    this.selectedObject = {};
    this.pickColorObjectSelect = false;
    this.deselectElementColor();
  }

  getObjectsIdColor() {
    return this.colorObjectsId;
  }

  removeColor() {
    if (this.selectedObjectItem) {
      this.resetColor({ [this.selectedObjectItem]: true });
      this.deselectElementColor();
      delete this.colorObjectsId[this.selectedObjectItem];
    }
  }

  deselectElementColor() {
    this.selectedObjectItem = null;
    this.selectedElement.forEach(callback => callback(this.selectedObjectItem));
  }

  highlightSelectedElement() {
    if (this.selectedObjectItem) {

      let opacity = 1;
      let count = 0;
      const interval = () => {
        const val = opacity === 1 ? 0 : 1;
        this.api.send('scene.colorObject', {
          objectId: this.selectedObjectItem,
          opacity: val,
        });
        opacity = val;
        count++;
        if (count < 10) {
          setTimeout(interval, 100);
        }
      };
      interval();

    }
  }

  saveColor(color) {
    if (this.selectedObjectItem) {
      this.colorObjectsId[this.selectedObjectItem] = color;
      this.setColor(this.selectedObjectItem, color);
    }
  }

  addEvent() {

    this.api.on('scene.picked', (pick) => {
      if (pick.position && this.pickColorObjectSelect) {
        if (this.selectedObjectItem === pick.objectId) {
          this.selectedObjectItem = null;
        } else {
          this.selectedObjectItem = pick.objectId;
        }
        this.selectedElement.forEach(callback => callback(this.selectedObjectItem));
      }
    });

    this.api.on('scene.picked', (pick) => {
      if (pick.position) {
        this.scenePicked.forEach(fn => fn(pick));
      }
    });

    this.api.on('scene.objectsShown', (objects) => {
      this.objectsShown.forEach(callback => callback(objects));
    });
    this.api.on('scene.objectsSelected', (objects) => {
      if (this.pickColorObjectSelect) {
        for (const key in objects) {
          objects[key] = false;
        }
        this.api.send('scene.selectObjects', { ...objects, ...this.selectedObject });

      } else {
        this.objectsSelected.forEach(callback => callback(objects));
      }
    });

    this.api.on('labels.picked', picked => {
      this.labelsPicked.forEach(callback => callback(picked));
    });

  }
  addSelectedColorObjects(colors = {}) {
    this.colorObjectsId = {};
    for(const key in colors) {
      this.colorObjectsId[key] = colors[key];
    }
  }
  updateCamera(action) {
    this._updateCamera(this.api, action, this.prevSelectedAction);
    this.addSelectedColorObjects(action?.colors)
    this.prevSelectedAction = action;
  }

  subscribe(callback, type) {
    if (!this[type]) throw Error('not found type event');
    const find = this[type].find(fn => fn === callback);
    if (find === undefined) {
      this[type].push(callback);
    }

  }

  unsubscribe(callback, type) {
    if (!this[type]) throw Error('not found type event');
    this[type] = this[type].filter(fn => fn !== callback);
  }
}
