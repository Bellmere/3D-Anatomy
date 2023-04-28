import { useState } from 'react';
import { toast } from 'react-toastify';

import AddModel from '../../service/AddModel';
import InputLabel from '../../components/fields/inputLabel';
import BaseButton from '../../components/buttons/base';
const newParams = (url) => {
  const source = new URLSearchParams(url.replace('?', '&'));
  return source.get('id');
};
const LABEL_WIDTH = '65px';
const DEFAULT_STATE = {
  uri: '',
  url: '',
  title: '',
};
export default function AddHumanModel({ changeUri }) {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState({ ...DEFAULT_STATE });

  const setUrl = (value) => {
    const sourceId = newParams(value);
    if (sourceId) {
      changeUri(sourceId);
      setModel({...model, uri: sourceId, url: value});
    }
    else {
      changeUri(null);
      setModel({...model, uri: '', url: ''})
    }
  };
  const disabled = !!model.uri.trim() && model.title.trim().length > 3;
  const setName = title => setModel({...model, title});

  const addModelDb = async () => {
    setLoading(true);
    const newModel = new AddModel(model);
    await newModel.save();
    setLoading(false);
    setModel({ ...DEFAULT_STATE });
    toast.success('Your model has been added', {
      autoClose: 3000,
    });
  };

  return (
    <>
      <InputLabel
        value={model.url}
        handlerChange={setUrl}
        label='Url'
        active={!!model.uri?.trim()}
        labelWidth={LABEL_WIDTH}
        placeholder='Please enter url model'
      />
      <InputLabel
        value={model.title}
        handlerChange={setName}
        label='Name'
        active={model.title?.trim().length > 3}
        labelWidth={LABEL_WIDTH}
        placeholder='Please enter name model'
      />
      <BaseButton
        handlerClick={addModelDb}
        disabled={!disabled}
        loading={loading}>
        Save
      </BaseButton>
    </>
  );
}
