import { useState, useEffect } from 'react';
import { getGifs } from '../components/Helpers/getGifs';

export const useFetchGifts = (category) => {
    const [state, Setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                Setstate({
                    data: imgs,
                    loading: false
                });
            });


    }, [category])

    return state;

}



