import React from 'react';

const collectionsData = [
    {
        id: 1,
        name: 'Model Name 1',
        description: 'Magna sunt consectetur id proident ipsum sunt. Ea ipsum irure tempor excepteur culpa proident nostrud velit dolor. Sint ea est laborum aliqua enim ea quis. Duis ipsum eiusmod labore cillum est incididunt.',
        image: '/assets/watch/—Pngtree—the wrist watch stainless steel_15513560.png'
    },
    {
        id: 2,
        name: 'Model Name 2',
        description: 'Magna sunt consectetur id proident ipsum sunt. Ea ipsum irure tempor excepteur culpa proident nostrud velit dolor. Sint ea est laborum aliqua enim ea quis. Duis ipsum eiusmod labore cillum est incididunt.',
        image: '/assets/watch/—Pngtree—the wrist watch stainless steel_15513560.png'
    },
    {
        id: 3,
        name: 'Model Name 3',
        description: 'Magna sunt consectetur id proident ipsum sunt. Ea ipsum irure tempor excepteur culpa proident nostrud velit dolor. Sint ea est laborum aliqua enim ea quis. Duis ipsum eiusmod labore cillum est incididunt.',
        image: '/assets/watch/—Pngtree—the wrist watch stainless steel_15513560.png'
    }
];

const Collections = () => {
    return (
        <div className='container'>
            <div className='subheader'>
                <h2>Our Brand New Collections!</h2>
            </div>
            <div className='collections_wrapper'>
                {collectionsData.map((collection) => (
                    <div key={collection.id} className='collection1'>
                        <div className="collection1_img">
                            <img src={collection.image} alt={collection.name} />
                        </div>
                        <div className='collection_details'>
                            <h3>{collection.name}</h3>
                            <p>{collection.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collections;