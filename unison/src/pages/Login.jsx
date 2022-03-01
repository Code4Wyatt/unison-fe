import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="login">
      <form className="login__form">
        <h1>Login</h1>
        <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="submit__btn">Submit</button>
      </form>
    </div>
  )
}

export default Login