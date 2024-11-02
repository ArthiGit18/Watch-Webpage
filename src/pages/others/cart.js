import React from 'react'
import Headerv1 from '../headers/headerv1'
import Navbar from '../navbar'

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
          <div className='cartV1_img'>
            <img src="/assets/watch/6.jpg" href="Watch" />
          </div>
          <div className="cart_Details">
            <h2>Watch</h2>
            <p>Brand</p>
            <div className='cart_details_chart'>
              <table>
                <tr>
                  <th>Order Summary</th>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>Quatity</td>
                  <td>Price</td>
                </tr>
                <tr>
                  <td>Flexible MenZ Watch - Quality Branded</td>
                  <td>2</td>
                  <td>29,000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart