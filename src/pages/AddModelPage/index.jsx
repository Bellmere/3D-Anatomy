import { useEffect, useState } from 'react';
import IFrameHuman from '../../components/biodigital/iframe-human/IFrameHuman';
import Switch from '../../components/fields/switch';
import AddHumanModel from './add-human-model';
import ShowAllModel from './show-all-model';
import './style.css';
export default function AddModelPage() {
  const [uri, setUri] = useState(null);
  const [isCreateModel, setCreateModel] = useState(true);

  useEffect(() => {
    setUri(null);
  }, [isCreateModel])

  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='add-model-page__switch'>
        <h2 className='add-model-page__title'>Model Page</h2>
        <Switch onSwitch={setCreateModel} checked={isCreateModel}>
          {isCreateModel ? 'Add new model' : 'All models'}
        </Switch>
      </div>

      <div className='add-model-page__content'>
        <div className='add-model-page__top-block'>
          {isCreateModel ? <AddHumanModel changeUri={setUri}/> : <ShowAllModel changeUri={setUri} selected={!!uri}/>}
        </div>
        <div className='add-model-page__aside'>
          {!!uri ? <IFrameHuman scene={uri} /> :
            <h4 className='add-model-page__aside-title'>Please enter url model</h4>}
        </div>
      </div>
    </div>
  );
}
