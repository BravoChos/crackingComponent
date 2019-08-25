import React, { useRef, useEffect } from 'react'

function Input({ type, placeholder, value, onChange, accessory }) {
  const renderCount = useRef(0)
  const inputElement = useRef(null)

  useEffect(() => {
    console.log('Render Count', placeholder, ++renderCount.current)

    return () => {
      console.log('Render Start')
    }
  })

  useEffect(() => {
    // ComponentDidMount
    console.log('Mount')

    return () => {
      // ComponentWillUnmount
      console.log('Unmount')
    }
  }, [])

  return <div style={{ display: 'flex' }}>
    <input ref={inputElement} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    {accessory}
  </div>
}

export default React.memo(Input)
