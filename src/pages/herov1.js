import React, { useEffect, useState } from 'react';
import { getHeaderContent } from '../apis/mainApi'; // Import the API function

const Herov1 = () => {
    const [headerContent, setHeaderContent] = useState({
        title: '',
        description: ''
    });

    // Use useEffect to call the API when the component mounts
    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const data = await getHeaderContent();
                setHeaderContent({
                    title: data[0], // Assuming the API returns an array of 2 strings
                    description: data[1]
                });
            } catch (error) {
                console.error('Failed to fetch header data:', error);
            }
        };

        fetchHeaderData(); // Call the function
    }, []); // Empty dependency array to run only once when the component mounts

    return (
        <div className="container">
            <div className="hero_wrapper">
                <img src="/assets/watch/1.png" alt="watch" />
                <h1>{headerContent.title}</h1>
                <p>{headerContent.description}</p>
            </div>
        </div>
    );
};

export default Herov1;
