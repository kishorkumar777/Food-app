import React, { useState } from 'react'

const User = ({name}) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className='user-box'>
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: banglore</h2>
      <h2>Email: kish@gmail.com</h2>
    </div>
  )
}

export default User