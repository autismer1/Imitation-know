import { useEffect, useState } from 'react';

// 监听鼠标滚轮
export default function useOnMouseWheel() {
  const [direction, setDirection] = useState(false)

  const onChange = (e) => {
    const event = e || window.event
    const direction = event.wheelDelta ? event.wheelDelta < 0 : event.detail > 0;
    setDirection(direction)
  }

  useEffect(() => {
    window.addEventListener('mousewheel', onChange)
    window.addEventListener('DOMMouseScroll', onChange)
    return () => {
      window.removeEventListener('mousewheel', onChange)
      window.removeEventListener('DOMMouseScroll', onChange)
    }
  }, [])
  
  return [direction, setDirection]
}