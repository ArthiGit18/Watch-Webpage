import React from 'react'

const Navbar = () => {
  return (
    <div className='container'>
        <div className='navbar_wrapper'>
            <div className='nav_logo'>
                <p>Image</p>
            </div>
            <div className='nav_list'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Cart</li>
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