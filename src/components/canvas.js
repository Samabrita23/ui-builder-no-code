import React from 'react';
import Element from './element';
import "../styles/canvas.css";

const Canvas = ({ elements, updateElement, setSelectedElement }) => {
  return (
    <div className="canvas">
      {elements.map((element) => (
        <Element
          key={element.id}
          {...element}
          updateElement={updateElement}
          setSelectedElement={setSelectedElement}
        />
      ))}
    </div>
  );
};

export default Canvas;
