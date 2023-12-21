import { useState } from 'react';

export default function App() {
    const [value, setValue] = useState('Placeholder');

    const changeValue = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={value} onChange={changeValue} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};