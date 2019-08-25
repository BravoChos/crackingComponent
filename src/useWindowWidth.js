import { useState, useEffect, useCallback } from 'react'

function useWindowWidth() {
  const [width, setWidth] = useState(
    window.innerWidth
  )

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize) 
    }
  }, [])
  
  return width
}

export default useWindowWidth