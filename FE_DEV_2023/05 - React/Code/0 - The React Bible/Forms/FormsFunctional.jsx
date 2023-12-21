import React, { useState } from 'react';

export default function FormsFunctional() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        alert('A name was submitted: ' + formData.name + formData.surname);
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' name='name' onChange={handleChange} />
            </label>

            <label>
                Surname:
                <input type='text' name='surname' onChange={handleChange} />
            </label>

            <input type='submit' value='Submit' />
        </form>
    );
};