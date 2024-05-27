import { useState, useRef, useEffect } from 'react';

const useDragHooks = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const parentRef = useRef<any>(null);
  const childRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.clientX;
      const delta = x - startX;
      parentRef.current.scrollLeft = scrollLeft - delta;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(parentRef.current.scrollLeft);
  };

  useEffect(() => {
    if (parentRef.current && childRef.current) {
      const parentWidth = parentRef.current.clientWidth;
      const childWidth = childRef.current.clientWidth;
      if (childWidth > parentWidth) {
        childRef.current.style.cursor = 'grab';
      } else {
        childRef.current.style.cursor = 'auto';
      }
    }
  }, []);

  return {
    parentRef,
    childRef,
    handleMouseDown,
  };
};

export default useDragHooks;
