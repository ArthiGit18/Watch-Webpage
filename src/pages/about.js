import React, { useEffect, useState } from 'react';
import { getAboutContent } from '../apis/mainApi';

const Aboutv1 = () => {

    const [aboutContent, setAboutContent] = useState({
        title: '',
        description: ''
    });

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const data = await getAboutContent();
                setAboutContent({
                    title: data[0], // Assuming the API returns an array of 2 strings
                    description: data[1]
                });
            } catch (error) {
                console.error('Failed to fetch about data:', error);
            }
        };
    
        fetchAboutData(); // Call the function
    }, []); 
    
    return (

        <div className="container">
            <div className='about_wrapper'>
                {/* <img src="/assets/watch/1.png" alt="watch" /> */}
                <div className='about_content'>
                    <h1>{aboutContent.title}</h1>
                    <p> {aboutContent.description}</p>
                </div>
                <div className='about_img'>
                    <img src="/assets/watch/2.png" alt="watch" />
                </div>
            </div>
        </div>
    )
}

export default Aboutv1