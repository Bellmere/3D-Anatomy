export default {
  _readyHuman(human, callback) {
    if(this.api) {
      human.send('scene.ready',callback);
      human.send('annotations.info', annotations => {
        for (let annotation in annotations) {
          human.send('annotations.destroy', annotation);
        }
      });
    }
  },
  resetColor(colors = {}) {
    for(const key in colors) {
      this.api.send('scene.colorObject', {
        objectId: key,
        tintColor: false,
        opacity: false,
      });
    }

  },
  setColor(selectedObjectItem, color) {
    this.api.send('scene.colorObject', {
      objectId: selectedObjectItem,
      tintColor: [color.r / 255, color.g / 255, color.b / 255],
      opacity: color.a,
      contrast: false,
    });
  },

  setAllColors(colors) {
    for(const key in colors) {
      this.setColor(key, colors[key])
    }
  },
  _updateCamera(human, action, prevAction = {}) {
    const objectsSelected = {
      ...action.objectsSelected
    };
    this.resetColor(prevAction?.colors);
    this.setAllColors(action?.colors);
    if(prevAction?.objectsSelected) {
      for (const key in prevAction.objectsSelected) {
        if(action.objectsSelected[key] !== prevAction.objectsSelected[key]) {
          objectsSelected[key] = !prevAction.objectsSelected[key];
        }
      }
    }

    const objectsShown = {
      ...action.objectsShown
    };
    if(prevAction?.objectsShown){
      for (const key in prevAction.objectsShown) {
        if(action.objectsShown[key] !== prevAction.objectsShown[key]) {
          objectsShown[key] = !prevAction.objectsShown[key];
        }
      }
    }


    human.send('scene.selectObjects', objectsSelected);
    human.send('scene.showObjects', objectsShown);
    human.send('camera.set', {
      ...action.camera,
      animate: true,
      animationDuration: 4,
    });
    human.send('annotations.info', annotations => {
      this._sendAnnotations(human, action, annotations);
    });
  },

  _restoreObjectShown(obj) {
    const newObj = {};
    for (let key in obj) {
      newObj[key] = false;
    }

    return newObj;
  },

  _sendAnnotations(human, action, annotations) {
    if (Object.keys(annotations).length) {
      for (let annotation in annotations) {
        human.send('annotations.destroy', annotation);
      }
    }
    if (action.labels) {
      if (action.labels.length > 0) {
        for (let annotation of action.labels) {
          human.send('labels.create', {
            objectId: annotation.objectId,
            annotationId: annotation.id,
            title: annotation.title,
            position: annotation.pos,
            theme: 'studioNext',
            description: annotation.description,
            labelOffset: annotation.offset,
          });
        }
      }
    }
  },
};
