import { useEffect, useState, useCallback } from 'react';

export default function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(0)
  const [direction, setDirection] = useState(false)

  const onChange = useCallback(() => {
    const top = document.documentElement.scrollTop || document.body.scrollTop
    if (top > scrollTop) {
      setDirection(true)
    } else {
      setDirection(false)
    }
    setScrollTop(top)
  }, [scrollTop])

  useEffect(() => {
    window.addEventListener('scroll', onChange)
    return () => {
      window.removeEventListener('scroll', onChange)
    }
  }, [onChange])

  return [scrollTop, direction]
}