import React, { useState, useCallback, useMemo } from 'react'
import Input from './Input'
import useInputState from './useInputState.js'
import useWindowWidth from './useWindowWidth'

function JoinForm() {
  const [ email, setEmail, handleChangeEmail ] = useInputState()
  const [ password, setPassword, handleChangePassword ] = useInputState()
  const windowWidth = useWindowWidth()
  
  const emailAccessory = useMemo(() => {
    return email !== '' && <button type="button">X</button>
  }, [email])
  
  const passwordAccessory = useMemo(() => {
    return password !== '' && <button type="button">X</button>
  }, [password])
  
  const handleReset = useCallback(() => {
    setEmail('')
    setPassword('')
  }, [])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    console.log(email, password)
  }, [email, password])

  return (
    <form onSubmit={handleSubmit}>
      {
        email !== 'abcd' && (
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleChangeEmail}
            accessory={emailAccessory}
          />
        )
      }
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={handleChangePassword}
        accessory={passwordAccessory}
      />
      <button type="submit">가입하기</button>
      <button type="button" onClick={handleReset}>초기화</button>
      <div>
        {windowWidth}
      </div>
    </form>
  )
}

export default JoinForm