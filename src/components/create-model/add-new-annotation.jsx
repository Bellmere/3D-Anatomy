import { useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import Switch from '../fields/switch';
import AddAction from '../modal/add-action';

export default observer(function ControllerIframe({ human, store }) {
  const modal = useRef(null);
  const [isNewScreen, setNewScreen] = useState(false);
  console.log(isNewScreen);


  useEffect(() => {
    const picked = async (pick) => {
      if (isNewScreen) {
        const data = await modal.current.open();
        if(data.success) {
          human.api.send('labels.create', {
            objectId: pick.objectId,
            title: data.title,
            description: data.description,
            position: [
              pick.position.x,
              pick.position.y,
              pick.position.z,
            ],
          }, (label) => {
            console.log(label);
            setNewScreen(false);
          })
        }
      }
    };

    human.subscribeScenePicked(picked);

    return () => human.unsubscribeScenePicked(picked);
  }, [isNewScreen, human]);


  return (
    <div className='create_page_controller'>
      <AddAction store={store} ref={modal} />
      <Switch
        checked={isNewScreen}
        onSwitch={setNewScreen}
      >
        <div style={{ display: 'flex', gap: '10px' }}>
          Create annotation mode
        </div>
      </Switch>
    </div>
  );
});
