import './style.css'

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
export default function IFrameHuman({ scene, init, className = '' }) {
  return (
    <>
      <iframe
        id='myWidget'
        title="myWidget"
        onLoad={init}
        className={`${className} iframe-human`}
        src={`https://human.biodigital.com/widget/?${paramsIframe.join('&')}&m=${scene}.json`}
        width='100%'
        height="100%"
      >
      </iframe>
    </>
  );
}
