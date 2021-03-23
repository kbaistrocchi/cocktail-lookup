import React from 'react';

const InputField = ({ id, value, onChange }) => (
    <input 
        type="text" 
        id={id}
        value={value}
        onChange={onChange}
    />
)

export default InputField;