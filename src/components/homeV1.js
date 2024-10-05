import React from 'react'
import Herov1 from '../pages/herov1'
import Aboutv1 from '../pages/about'
import Modelv1 from '../pages/model'
import Navbar from '../pages/navbar'
import Testimonial from '../pages/testimonial'


const HomeV1 = () => {
  return (
    <div>
         <Navbar />
        <Herov1 />
        <Aboutv1 />
        <Modelv1 />
        <Testimonial />
    </div>
  )
}

export default HomeV1