// PropertyEditor.js

import React, { useState, useEffect } from 'react';
import "../styles/properties.css";

const PropertyEditor = ({ selectedElement, updateElement }) => {
  const [marginTop, setMarginTop] = useState('');
  const [fontSize, setFontSize] = useState('');

  useEffect(() => {
    if (selectedElement) {
      setMarginTop(selectedElement.styleProperties['margin-top'] || '');
      setFontSize(selectedElement.styleProperties['font-size'] || '');
    }
  }, [selectedElement]);

  const handleStyleChange = (property, value) => {
    // Update the controlled state
    if (property === 'margin-top') {
      setMarginTop(value);
    } else if (property === 'font-size') {
      setFontSize(value);
    }
  
    // Update the selected element's style properties in the canvas
    updateElement(selectedElement.id, { styleProperties: { ...selectedElement.styleProperties, [property]: value } });
  };
  
  return (
    <div className="property-editor">
      <h2>Properties</h2>
      <label>
        Margin Top:
        <input
          type="text"
          value={marginTop}
          onChange={(e) => handleStyleChange('margin-top', e.target.value)}
        />
      </label>
      <label>
        Font Size:
        <input
          type="text"
          value={fontSize}
          onChange={(e) => handleStyleChange('font-size', e.target.value)}
        />
      </label>
    </div>
  );
};

export default PropertyEditor;
