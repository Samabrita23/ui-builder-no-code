import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import '../styles/properties.css';

const PropertyEditor = ({ selectedElement, updateElement, fontSize }) => {
  // State for margin-top and font-size inputs
  const [marginTop, setMarginTop] = useState('');
  const [fontSizeInput, setFontSize] = useState('');

  useEffect(() => {
    // Update state when selectedElement changes
    if (selectedElement) {
      setMarginTop(selectedElement.styleProperties['margin-top'] || '');
      setFontSize(selectedElement.styleProperties['font-size'] || '');
    }
  }, [selectedElement]);

  // Handle changes to margin-top and font-size
  const handleStyleChange = (property, value) => {
    if (property === 'margin-top') {
      setMarginTop(value);
    } else if (property === 'font-size') {
      setFontSize(value);

      // Update the selected element's style properties and fontSize in the canvas
      updateElement(selectedElement.id, {
        styleProperties: { ...selectedElement.styleProperties, [property]: value },
        fontSize: value,
      });
    }
  };

  if (!selectedElement) {
    return null; // Don't render if no element is selected
  }

  return (
    <Draggable handle=".handle" bounds="parent">
      <div className="property-editor">
        <div className="handle">
          <h3>Properties</h3>
        </div>
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
            value={fontSizeInput}
            onChange={(e) => handleStyleChange('font-size', e.target.value)}
          />
        </label>
      </div>
    </Draggable>
  );
};

export default PropertyEditor;
