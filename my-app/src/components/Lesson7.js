import React from 'react';
import './Lesson.css';

const Lesson7 = () => {
  return (
    <div className="lesson">
      <div className="reactContent">
        <h1>Rendering element in React</h1>
        <br />
        <p>In React, rendering means showing components on the screen.</p>
        <p>
          Elements are small parts of a React app that you see on the screen.
        </p>
        <br />
        <h4>Creating Elements</h4>
        <p>
          You can create elements using JSX or{' '}
          <code>React.createElement()</code>.
        </p>
        <p>
          JSX is like HTML in JavaScript, making it easier to write React
          components.
        </p>
        <br />
        <h4>Rendering Elements</h4>
        <p>
          Components return elements in their <code>render()</code> method.
        </p>
        <p>
          Use <code>ReactDOM.render()</code> to show elements on the screen.
        </p>
        <br />
        <h4>Example</h4>
        <br />
        <div className="code">
          <p>import React from 'react';</p>
          <p>import ReactDOM from 'react-dom';</p>
          <p>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</p>
          <p>ReactDOM.render(element, document.getElementById('root'));</p>
        </div>
        <br />
        <h4>Updating Elements</h4>
        <p>
          React elements are immutable, so you create new elements to update the
          UI.
        </p>
        <p>
          Use <code>ReactDOM.render()</code> again with the new element or
          update state with <code>setState()</code>.
        </p>
      </div>
    </div>
  );
};

export default Lesson7;
