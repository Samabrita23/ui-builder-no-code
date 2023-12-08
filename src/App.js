// Import necessary libraries and components
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Canvas from './components/canvas';
import PropertyEditor from './components/property-editor';

function App() {
  // State to manage elements, selected element, and generated code
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [generatedCode, setGeneratedCode] = useState('');

  // Function to add a new element to the canvas
  const addElement = (elementType) => {
    const newElement = {
      id: elements.length + 1,
      type: elementType,
      value: `Sample ${elementType.charAt(0).toUpperCase()}${elementType.slice(1)} ${elements.length + 1}`,
      styleProperties: { 'margin-top': '3px', 'font-size': '0.65rem' },
    };

    setElements([...elements, newElement]);
    setSelectedElement(newElement);
  };

  // Function to update an element's properties
  const updateElement = (id, newProperties) => {
    setElements((prevElements) =>
      prevElements.map((element) => (element.id === id ? { ...element, ...newProperties } : element))
    );
  };

  // Function to generate HTML+CSS+JS code from Screen JSON
  const generateCode = () => {
    // Replace this logic with your code generation logic based on the elements state
    const code = `
      <html>
        <head>
          <style>
            /* CSS styles based on saved screen JSON */
            ${elements.map((element) => `#${element.id} { ${Object.entries(element.styleProperties).map(([key, value]) => `${key}: ${value};`).join(' ')} }`).join('\n')}
          </style>
        </head>
        <body>
          <!-- HTML elements based on saved screen JSON -->
          ${elements.map((element) => `<div id="${element.id}">${element.value}</div>`).join('\n')}
          <script>
            // JavaScript logic based on saved screen JSON
            // You can add interactive behavior here if needed
          </script>
        </body>
      </html>
    `;

    setGeneratedCode(code);
    setSelectedElement(null); // Close the property editor after generating code
  };

  return (
    <div className="App">
      <div className='heading'>UI BUILDER</div>
      <button className='save-button' onClick={generateCode}>Save</button>
      <div className="ui-builder">
        <Sidebar addElement={addElement} />
        <Canvas elements={elements} updateElement={updateElement} setSelectedElement={setSelectedElement} />
        {selectedElement && <PropertyEditor selectedElement={selectedElement} updateElement={updateElement} />}
        <div className="generated-code">
          <h3>Generated Code</h3>
          <pre>{generatedCode}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
