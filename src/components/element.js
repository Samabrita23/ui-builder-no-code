import React, { useState, useEffect } from 'react';

const Element = ({ id, type, value, styleProperties, updateElement, fontSize, setSelectedElement }) => {
  // State for localValue (element text) and localFontSize
  const [localValue, setLocalValue] = useState(value);
  const [localFontSize, setLocalFontSize] = useState(fontSize);

  useEffect(() => {
    // Update localValue when the value changes
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    // Update localFontSize when fontSize changes
    setLocalFontSize(fontSize);
  }, [fontSize]);

  // Handle changes to element text
  const handleChange = (e) => {
    setLocalValue(e.target.value);
    updateElement(id, { value: e.target.value });
  };

  // Handle element selection
  const handleSelect = () => {
    setSelectedElement({ id, type, value, styleProperties });
  };

  return (
    <div className={`element ${type}`} style={{ ...styleProperties, fontSize: localFontSize }} onClick={handleSelect}>
      <input type="text" value={localValue} onChange={handleChange} style={{ fontSize: localFontSize }} />
    </div>
  );
};

export default Element;
