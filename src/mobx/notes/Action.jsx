import { makeAutoObservable } from 'mobx';
import { uniqueId } from '../../helpers';

export default class Action {
  constructor({
                camera = {},
                id = null,
                labels = [],
                objectsSelected = {},
                objectsShown = {},
                order = 0,
                title = '',
              }) {
    this.camera = camera;
    this.labels = labels;
    this.title = title;
    this.objectsSelected = objectsSelected;
    this.objectsShown = objectsShown;
    this.order = order;
    this.id = id === null ? uniqueId() : id;
    makeAutoObservable(this);
  }
  get isValid() {
    return this.title?.length > 2;
  }

  getLabel(labelId) {
    return this.labels.find(item => labelId === item.id);
  }
  update(options) {
    Object.assign(this, options);
  }
}
