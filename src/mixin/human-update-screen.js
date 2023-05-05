export default {
  _updateCamera(human, action) {

    human.send('scene.reset');
    human.send('camera.set', {
      ...action.camera,
      animate: true,
      animationStyle: 'around',
    });
    human.send('scene.selectObjects', action.objectsSelected);
    human.send('scene.showObjects', action.objectsShown);
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
