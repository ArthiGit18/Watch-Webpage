import React from 'react'
import Headerv1 from '../headers/headerv1'
import Navbar from '../navbar'
import { Button } from '@mui/material'

const Address = () => {
    return (

      
            <div className=''>

                <div className='delivery_address'>
                    <table>
                        <tr>
                            <th><h2>Deliver To</h2></th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>William PAttrick</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>:</td>
                            <td>9876786875</td>
                        </tr>
                        <tr>
                            <td>Additional Contact Number</td>
                            <td>:</td>
                            <td>7658945678</td>
                        </tr>
                        <tr>
                            <td>Address Type</td>
                            <td>:</td>
                            <td>Home Address</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>40, Saint Paul Block, Emanual Resident, London</td>
                        </tr>
                        <tr>
                            <td>Directions to Reach</td>
                            <td>:</td>
                            <td>Robert School Opposite</td>
                        </tr>

                    </table>
                    <div className='address_actions'>
                        <Button variant='text'>Update</Button>
                        <Button variant='contained'>Continue</Button>
                    </div>
                </div>
            </div>
     

    )
}

export default Address