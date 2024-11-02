import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container_bg'>
        <div className='navbar_wrapper'>
            <div className='nav_logo'>
                <p>Image</p>
            </div>
            <div className='nav_list'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    
                </ul>
            </div>
            <div className='nav_action'>
                <button className='btn_action'>
                    Sign Up / Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar