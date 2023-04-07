import { Dna } from 'react-loader-spinner';
import './loader.css';

export const Loader = () => {
  <div className="loader">
    <Dna
      visible={true}
      height="20"
      width="32"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>;
};
