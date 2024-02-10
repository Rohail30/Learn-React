import React from 'react';
import './Lesson.css';

const Lesson1 = () => {
  return (
    <div className="lesson">
      <div className="reactContent">
        <h1>What is react?</h1>
        <br />
        <p>
          React is a popular JavaScript library for building user interfaces
          (UIs) in web applications. It was developed by Facebook and has since
          gained widespread adoption in the web development community due to its
          simplicity, efficiency, and flexibility.
        </p>
        <br />
        <p>
          React is a JavaScript library used for building user interfaces in web
          applications. It allows developers to create reusable UI components
          and efficiently update the UI in response to user interactions or
          changes in data." React follows a component-based architecture, where
          UIs are composed of small, self-contained components that can be
          nested within each other. These components can have their own state
          and properties, making them highly modular and reusable. One of the
          key features of React is its use of a virtual DOM (Document Object
          Model), which is a lightweight representation of the actual DOM in
          memory. React compares the virtual DOM with the real DOM and
          efficiently updates only the parts of the UI that have changed,
          resulting in improved performance and rendering speed.
        </p>
      </div>
    </div>
  );
};

export default Lesson1;
