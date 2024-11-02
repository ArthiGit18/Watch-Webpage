import React from 'react'
import Headerv1 from '../headers/headerv1'
import Navbar from '../navbar'
import { Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Shop = () => {
  return (

    <div>
      <Navbar />
      <Headerv1
        heading="Shop"
        breadcrumbItems={[
          { label: "home", href: "/" },
          { label: "shop" }
        ]}
      />
      <div className='container'>
        <div className='shopV1_wrapper'>
          <div className='shopV1_list'>
            <div className='list_img1'>
              <img src="/assets/watch/6.jpg" href="Watch" />
            </div>
            <div className='list_content'>
              <p>Nostrud mollit occaecat aute velit nulla mollit. Esse id consectetur labore eu cupidatat fugiat ipsum. Aliqua ea culpa ullamco laboris aute culpa irure esse labore eu sint est.</p>
            </div>
            <div className='list_actions'>
              <Button variant="text">Details</Button>
              <div className='list_actions_section'>
                <FavoriteBorderIcon />
                <Button variant="contained">Buy Now</Button>
              </div>
            </div>
          </div>
         
          <div className='shopV1_list'>
            <div className='list_img1'>
              <img src="/assets/watch/6.jpg" href="Watch" />
            </div>
            <div className='list_content'>
              <p>Nostrud mollit occaecat aute velit nulla mollit. Esse id consectetur labore eu cupidatat fugiat ipsum. Aliqua ea culpa ullamco laboris aute culpa irure esse labore eu sint est.</p>
            </div>
            <div className='list_actions'>
              <Button variant="text">Details</Button>
              <div className='list_actions_section'>
                <FavoriteBorderIcon />
                <Button variant="contained">Buy Now</Button>
              </div>
            </div>
          </div>
         
          <div className='shopV1_list'>
            <div className='list_img1'>
              <img src="/assets/watch/6.jpg" href="Watch" />
            </div>
            <div className='list_content'>
              <p>Nostrud mollit occaecat aute velit nulla mollit. Esse id consectetur labore eu cupidatat fugiat ipsum. Aliqua ea culpa ullamco laboris aute culpa irure esse labore eu sint est.</p>
            </div>
            <div className='list_actions'>
              <Button variant="text">Details</Button>
              <div className='list_actions_section'>
                <FavoriteBorderIcon />
                <Button variant="contained">Buy Now</Button>
              </div>
            </div>
          </div>
         
          <div className='shopV1_list'>
            <div className='list_img1'>
              <img src="/assets/watch/6.jpg" href="Watch" />
            </div>
            <div className='list_content'>
              <p>Nostrud mollit occaecat aute velit nulla mollit. Esse id consectetur labore eu cupidatat fugiat ipsum. Aliqua ea culpa ullamco laboris aute culpa irure esse labore eu sint est.</p>
            </div>
            <div className='list_actions'>
              <Button variant="text">Details</Button>
              <div className='list_actions_section'>
                <FavoriteBorderIcon />
                <Button variant="contained">Buy Now</Button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Shop