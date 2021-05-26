import React, { useState, useEffect } from 'react'
import { GifGridItems } from '../GifGridItems';


export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {

        const apiKey = '0B8NGW8tHOa0hMTHk4pzP4PdSlTG40gS';
        const url = `https://api.giphy.com/v1/gifs/search?q=Friends&limit=10&api_key=${apiKey}`
        const resp = await fetch(url);
        const { data } = await resp.json();
        const giphy = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        console.log(giphy);
        setImages(giphy);
    }


    return (
        <>
            <h3> {category} </h3>
            {
                images.map(img => (
                    <GifGridItems
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </>
    )
}


