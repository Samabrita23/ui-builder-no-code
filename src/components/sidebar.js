import React from 'react';
import "../styles/sidebar.css";
import { useDrag } from 'react-dnd';

const elementTypes = ['label', 'button', 'hyperlink'];

const Sidebar = ({ addElement }) => {
  const handleAddElement = (elementType) => {
    addElement(elementType);
  };

  return (
    <div className="sidebar">
    <h3>Visual Elements</h3>
    <div className='buttons'>
      <button onClick={() => handleAddElement('label')}>Add Label</button>
      <button onClick={() => handleAddElement('button')}>Add Button</button>
      <button onClick={() => handleAddElement('hyperlink')}>Add Hyperlink</button>
    </div>
    </div>
  );
};

export default Sidebar;
