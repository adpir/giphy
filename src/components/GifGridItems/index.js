import React from 'react'

export const GifGridItems = ({ id, title, url }) => {
    console.log(id, title, url);
    return (
        <div>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
