import React from 'react'

const Aboutv1 = () => {
    return (
        <div className="video-background">
            <video autoPlay muted loop className="video-bg">
                <source src="/assets/video/9846-221477041_medium.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <img src="/assets/watch/1.png" alt="watch" />
                <h1>Step Into the World of Exquisite Watches</h1>
                <p> See Our Collection!</p>
            </div>
        </div>
    )
}

export default Aboutv1