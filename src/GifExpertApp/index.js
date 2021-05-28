import React, { useState } from 'react';
import { AddCategories } from '../components/AddCategories';
import { GifGrid } from '../components/GifGrid/index';

export default function GifExpertApp() {
    const [categories, setCategories] = useState(['giphy']);


    return (
        <>
            <h1>GIPHY</h1>
            <AddCategories setCategories={setCategories} />
            <hr />

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
