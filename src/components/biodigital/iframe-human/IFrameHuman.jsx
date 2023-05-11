import './style.css';

const paramsIframe = [
  'ui-info=false',
  'ui-fullscreen=true',
  'ui-tools=true',
  'ui-annotations=true',
  'ui-object-tree=true',
  'ui-loader=circle',
  'ui-reset=false',
  'dk=' + process.env.REACT_APP_BIO_PUBLIC_KEY,
];
export default function IFrameHuman({
  scene,
  init = () => {},
  className = '',
  children,
}) {
  const idModel = scene?.length > 10 ? `m=${scene}.json` : `be=${scene}`;
  return (
    <div
      className="loh"
      style={{ position: 'relative', height: '100%', width: '100%' }}
    >
      <div style={{ position: 'absolute', right: '20px', top: '20px' }}>
        {children}
      </div>
      <iframe
        id="myWidget"
        title="myWidget"
        onLoad={init}
        className={`${className} iframe-human`}
        src={`https://human.biodigital.com/widget/?${paramsIframe.join(
          '&'
        )}&${idModel}`}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
