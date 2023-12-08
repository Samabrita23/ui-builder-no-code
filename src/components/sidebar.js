import React from 'react';
import "../styles/sidebar.css";
import { useDrag } from 'react-dnd';

// Define the types of elements that can be added
const elementTypes = ['label', 'button', 'hyperlink'];

const Sidebar = ({ addElement }) => {
  // Handle adding an element based on its type
  const handleAddElement = (elementType) => {
    addElement(elementType);
  };
  
  return (
    <div className="sidebar">
      <h3>Visual Elements</h3>
      <div className='buttons'>
        {/* Buttons to add different types of elements */}
        {elementTypes.map((elementType) => (
          <button key={elementType} className='elements' onClick={() => handleAddElement(elementType)}>
            Add {elementType.charAt(0).toUpperCase() + elementType.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
