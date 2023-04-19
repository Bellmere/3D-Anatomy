import { ColorRing } from 'react-loader-spinner';

import { observer } from 'mobx-react-lite';
import { StoreContext, useContext } from '../../context';
import './loader.css';

export const Loader = observer(() => {
  const { mainLoader } = useContext(StoreContext);

  if (!mainLoader.isLoading) return null;
  return (
    <div className="wrapper_loader">
      <div className="loader" id="loader">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    </div>
  );
});
