import React, { useState } from 'react';

const Element = ({ id, type, value, styleProperties, updateElement, fontSize, setSelectedElement }) => {
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (e) => {
    setLocalValue(e.target.value);
    updateElement(id, { value: e.target.value });
  };

  const handleSelect = () => {
    setSelectedElement({ id, type, value, styleProperties });
  };

  return (
    <div className={`element ${type}`} style={{ ...styleProperties, fontSize: fontSize }} onClick={handleSelect}>
      <input type="text" value={localValue} onChange={handleChange} />
    </div>
  );
};

export default Element;
