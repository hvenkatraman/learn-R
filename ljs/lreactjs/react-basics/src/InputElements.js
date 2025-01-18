// InputElements.js

import React from 'react';

// Button component
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

// TextInput component
const TextInput = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

// Checkbox component
const Checkbox = ({ checked, onChange, label }) => (
  <label>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);

// Select component
const Select = ({ options, value, onChange }) => (
  <select value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

// Export all components
export const InputElements = {
  Button,
  TextInput,
  Checkbox,
  Select
};
