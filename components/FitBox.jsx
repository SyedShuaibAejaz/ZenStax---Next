'use client';

import { useEffect, useRef, useState } from 'react';

const MARGIN = 32;
const MIN_SCALE = 0.35;

export default function FitBox({ className, children }) {
  const boxRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const box = boxRef.current;

    if (!box) {
      return undefined;
    }

    function update() {
      const viewport = window.visualViewport;
      const availableWidth = (viewport ? viewport.width : window.innerWidth) - MARGIN;
      const availableHeight = (viewport ? viewport.height : window.innerHeight) - MARGIN;

      if (!box.offsetWidth || !box.offsetHeight) {
        return;
      }

      const next = Math.min(
        1,
        availableWidth / box.offsetWidth,
        availableHeight / box.offsetHeight
      );

      setScale(Math.round(Math.max(MIN_SCALE, next) * 1000) / 1000);
    }

    update();

    const observer = new ResizeObserver(update);
    observer.observe(box);

    window.addEventListener('resize', update);

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', update);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);

      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', update);
      }
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={className}
      style={{ transform: `scale(${scale})` }}
    >
      {children}
    </div>
  );
}
