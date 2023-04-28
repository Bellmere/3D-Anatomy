import { makeAutoObservable } from 'mobx';

export default class Action {
  constructor({
                camera = {},
                id = null,
                labels = [],
                objectsSelected = {},
                objectsShown = {},
                order = 0,
                title = '',
                description = '',
              }) {
    this.camera = camera;
    this.labels = labels;
    this.objectsSelected = objectsSelected;
    this.objectsShown = objectsShown;
    this.order = order;
    this.title = title;
    this.description = description;
    this.id = id;
    this.scene = null;
    makeAutoObservable(this);
  }

}
