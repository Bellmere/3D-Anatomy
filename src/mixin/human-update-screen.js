export default {
  _readyHuman(human, callback) {
    if(this.human) {
      human.send('scene.ready',callback);
      human.send('annotations.info', annotations => {
        for (let annotation in annotations) {
          human.send('annotations.destroy', annotation);
        }
      });
    }
  },
  _updateCamera(human, action, prevAction = {}) {
    const objectsSelected = {
      ...action.objectsSelected
    };
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
          human.send('annotations.create', {
            objectId: annotation.objectId,
            annotationId: annotation.id,
            title: annotation.title,
            position: annotation.pos,
            description: annotation.description,
            labelOffset: annotation.offset,
          });
        }
      }
    }
  },
};
