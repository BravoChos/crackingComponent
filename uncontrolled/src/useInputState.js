import { useState, useCallback } from 'react'

function useInputState() {
  const [value, setValue] = useState('')

  const handleChange = useCallback(({ target }) => {
    setValue(target.value)
  }, [])

  return [
    value,
    setValue,
    handleChange,
  ]
}

export default useInputState