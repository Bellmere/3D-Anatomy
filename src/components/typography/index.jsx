import { useEffect, useRef, useCallback } from 'react';
import './style.css'
export default function Typography({ content, humanApi, children }) {
  const contentRef = useRef(null);
  const eventAction = useCallback(({ target }) => {
    if (target.classList.contains('action-item')) {
      humanApi.setActionById(target.dataset.key);
    }
  }, [humanApi]);
  useEffect(() => {
    const element = contentRef.current;
    if (contentRef.current) {
      element.addEventListener('click', eventAction);
    }
    return () => element?.removeEventListener('click', eventAction);
  }, [eventAction]);

  return (
    <>
    <div ref={contentRef} className="typography-component">
      {children}
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
    </>
  );
}
