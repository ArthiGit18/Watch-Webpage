import React from 'react'

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button } from '@mui/material';

const Selecteditem = () => {
  return (
    <div>
        <div className='cart_item'>
            <div className='cartV1_img'>
              <img src="/assets/watch/6.jpg" href="Watch" />
            </div>
            <div className="cart_Details">
              <h2>Watch</h2>
              <p>Brand</p>
              <hr></hr>
              <div className='cart_details_chart'>
                <table>
                  <tr>
                    <th>Order Summary</th>
                  </tr>

                  <tr>
                    <td>Name</td>
                    <td>Quatity</td>
                    <td>Delivery Charge</td>
                    <td>Total Price</td>
                  </tr>
                  <tr >
                    <td>Flexible MenZ Watch - Quality Branded</td>
                    <td className='table_actions'>
                      <div>2</div>
                      <div> <ControlPointIcon /><RemoveCircleOutlineIcon /></div>
                    </td>
                    <td>Free Delivery</td>
                    <td>29,000</td>
                  </tr>
                </table>

                <div className='cart_details_chart_actions'>
                  <Button variant='text'>Cancel</Button>
                  <Button variant='contained'>Continue</Button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Selecteditem