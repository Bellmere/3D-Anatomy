import { useState } from 'react';

import IFrameHuman from '../../components/biodigital/IFrameHuman';
import LeftLabelInput from '../../components/fields/leftLabelInput/leftLabelInput';
import './style.css'
const newParams = (url) => {
  const source = new URLSearchParams(url.replace('?', '&'));
  return source.get('id');
};
export default function AddModelPage() {
  const [paramsId, setParamsId] = useState('');
  return (
    <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
      <h2>Model Page</h2>
      <div className="add-model-page__top-block">
        <input type='text' className="add-model-page__top-block__input_url" onChange={({ target }) => {
          const sourceId = newParams(target.value);
          if (sourceId) {
            setParamsId(sourceId);
          }
        }} />
        <LeftLabelInput disabled={!paramsId} label="Save" placeholder="Please enter url model" />

        {paramsId}
      </div>

      {!!paramsId ? <IFrameHuman scene={paramsId} /> : null}
    </div>
  );
}
