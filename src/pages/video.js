import React from 'react'

const Video = () => {
    return (
        <div className='subscription_wrapper'>
            <video autoPlay muted loop className="video-bg">
                <source src="/assets/video/3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='subs_box'>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="subs_input"
                />
                <button className="subs_button">Submit</button>
            </div>
        </div>
    )
}

export default Video