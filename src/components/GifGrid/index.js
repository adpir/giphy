import React, { useState, useEffect } from 'react'
import { GifGridItems } from '../GifGridItems';
import { getGifs } from '../Helpers/getGifs';


export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(imgs => setImages(imgs))
    }, [category])


    return (
        <>
            <h3> {category} </h3>
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItems
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}


