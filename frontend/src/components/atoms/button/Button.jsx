import React from 'react'

const Button = ({text, handleCreateProject}) => {
  return (
    <button
        className='btn btn-lg btn-success' 
        onClick={handleCreateProject}>
        {text}
    </button>
  )
}

export default Button