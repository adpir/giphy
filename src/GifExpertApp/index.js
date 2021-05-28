import React, { useState } from 'react';
import { AddCategories } from '../components/AddCategories';
import { GifGrid } from '../components/GifGrid/index';

export default function GifExpertApp() {
    const [categories, setCategories] = useState(['Fun']);


    return (
        <>
            <h1 className="animate__animated animate__zoomIn">FunGiphy</h1>
            <AddCategories setCategories={setCategories} />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </ >
    )
}
