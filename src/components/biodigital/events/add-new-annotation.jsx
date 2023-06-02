import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import Switch from '../../fields/switch';
import AddAction from '../../modal/add-action';


export default observer(function AddNewAnnotation({ human, onModeCreated, onChange, children }) {
  const modal = useRef(null);

  useEffect(() => {
    const picked = async (pick) => {
      if (onModeCreated) {
        modal.current.setDefaultValue('', '');
        const data = await modal.current.open();
        if (data.success) {
          human.api.send('labels.create', {
            objectId: pick.objectId,
            title: data.title,
            description: data.description,
            theme: 'studioNext',
            position: [
              pick.position.x,
              pick.position.y,
              pick.position.z,
            ],
          });
        }
      }
    };

    human.subscribe(picked, 'scenePicked');

    return () => human.unsubscribe(picked, 'scenePicked');
  }, [onModeCreated, human]);

  return (
    <>
      <AddAction ref={modal} />
      <>
        {children}
        <Switch
          checked={onModeCreated}
          onSwitch={() => onChange(!onModeCreated)}
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            Create annotation mode
          </div>
        </Switch>
      </>
    </>
  );
});
