import React from 'react'

const SignUpBtn = ({setModalShow,text}) => {
  return (
    <div>
      <button onClick={() => setModalShow(true)} >{text}</button>
    </div>
  )
}

export default SignUpBtn
