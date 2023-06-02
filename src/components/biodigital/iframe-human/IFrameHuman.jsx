import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import './style.css';

import { ReactComponent as HideFullScreen } from '../../../icons/full-screen-exit.svg';
import { ReactComponent as OpenFullScreen } from '../../../icons/full-screen-open.svg';
import { ReactComponent as LogoIcon } from '../../../icons/logo.svg';

const paramsIframe = [
  'ui-all=false',
  'ui-fullscreen=false',
  'ui-loader=circle',
  'ui-label-list=false',
  'ui-anatomy-labels=false',
  'ui-reset=false',
  'ui-nav=true',
];
export default function IFrameHuman({
  scene = '',
  init = () => {},
  className = '',
  children,
  pickStatus
}) {
  const handle = useFullScreenHandle();
  const idModel = scene?.length > 10 ? `m=${scene}.json` : `be=${scene}`;

  const toggleFullScreen = () => {
    if (handle.active) handle.exit();
    else handle.enter();
  };

  let urlScene = '';

  if (scene.includes('https://') || scene.includes('http://')) {
    urlScene = `${scene}&${paramsIframe.join('&')}`;
  } else {
    urlScene = `https://human.biodigital.com/widget/?dk=${
      process.env.REACT_APP_BIO_PUBLIC_KEY
    }&${paramsIframe.join('&')}&${idModel}`;
  }
  return (
    <FullScreen handle={handle}>
      <div style={{ position: 'relative', height: '100%', width: '100%' ,  overflow: 'hidden' }}>
        <div className={(pickStatus ? 'wrap-screen-false' : 'wrap-screen')}  style={{ position: 'absolute', right: '15px', top: '15px' , overflow: 'auto' , bottom: '15px' , zIndex: '1' }}>
          {handle?.active ? null : children}
        </div>
        {handle.active ?
          <div className="logo-client">
            <LogoIcon className='logo__icon'/>
          </div>
          : ''
        }
        <button
          className={
            handle.active
              ? 'full-screen-btn base_button'
              : 'not-full-screen-btn base_button'
          }
          onClick={toggleFullScreen}
        >
          {' '}
          {handle.active ? <HideFullScreen /> : <OpenFullScreen />}
        </button>
        <iframe
          id="myWidget"
          title="myWidget"
          onLoad={init}
          className={`${className} iframe-human`}
          src={urlScene}
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </FullScreen>
  );
}
