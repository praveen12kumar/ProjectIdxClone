import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="navbar h-20 bg-neutral">
            <Link to="/" className="btn btn-ghost text-xl">Sandbox</Link>
        </div>
    
    </>
  )
}

export default Header