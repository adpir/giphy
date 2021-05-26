import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategories = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(categ => [inputValue, ...categ]);
            setInputValue('');
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValue}
            />

        </form>
    )

}
AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}
//PropTypes.string.isRequired en donde dice string it should be func - pq estamos haciendo una funcion