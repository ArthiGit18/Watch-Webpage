import React from 'react'
import Headerv1 from '../headers/headerv1'
import Navbar from '../navbar'
import Address from './address';
import Payment from './payment';
import Selecteditem from './selecteditem';

const Cart = () => {
  return (

    <div>
      <Navbar />
      <Headerv1
        heading="Cart"
        breadcrumbItems={[
          { label: "home", href: "/" },
          { label: "cart" }
        ]}
      />
      <div className='container'>
        <div className='cartV1_wrapper'>

          <div>
            <Selecteditem />
          </div>

          <div className='cart_address'>
            <Address />
          </div>
          
          <div className='cart_payment'>
            <Payment />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart