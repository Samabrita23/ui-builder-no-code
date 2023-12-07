import React, { useState } from 'react';
import Element from './element';
import "../styles/canvas.css";

// Canvas.js

const Canvas = ({ elements, updateElement, fontSize, setSelectedElement }) => {
    return (
      <div className="canvas">
        {elements.map((element) => (
          <Element key={element.id} {...element} updateElement={updateElement} fontSize={fontSize} setSelectedElement={setSelectedElement} />
        ))}
      </div>
    );
  };
  
  export default Canvas;
  
  
  