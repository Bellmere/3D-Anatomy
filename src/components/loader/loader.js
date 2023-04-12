import { Dna } from 'react-loader-spinner';

import { observer} from 'mobx-react-lite';
import { StoreContext, useContext } from '../../context';
import './loader.css';

export const Loader = observer(() => {
  const { mainLoader } = useContext(StoreContext);

  if(!mainLoader.isLoading) return null;
  return (
    <div className="wrapper_loader">
      <div className='loader' id="loader">
        <Dna
          visible={true}
          height='20'
          width='32'
          ariaLabel='dna-loading'
          wrapperStyle={{}}
          wrapperClass='dna-wrapper'
        />
      </div>
    </div>
  )
});
