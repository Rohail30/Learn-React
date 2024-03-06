import React from 'react';
import './Lesson.css';

const Lesson8 = () => {
  return (
    <div className="lesson">
      <div className="reactContent">
        <h1>Components and Props</h1>
        <br />
        <p>
          <strong>Components</strong>: Components are the building blocks of
          React applications. They are like JavaScript functions that accept
          inputs (called props) and return React elements describing what should
          appear on the screen. Components can be either function components or
          class components. Function components are JavaScript functions that
          take props as arguments and return React elements. Class components
          are ES6 classes that extend React.Component and have a render() method
          returning React elements. Components can be composed together to
          create complex UIs, where smaller, reusable components are combined to
          form larger components.
        </p>
        <br />
        <div className="code">
          <p>function Welcome(props) &#123;</p>
          <p> return &lt;h1&gt;Hello, &#123;props.name&#125;&lt;/h1&gt;;</p>
          <p>&#125;</p>
        </div>
        <br />
        <p>
          <strong>Props (Properties)</strong>: Props are inputs that are passed
          into components. They are used to customize and configure a
          component's behavior and appearance. Props are passed to components as
          attributes and are accessed inside the component as properties of the
          props object. Props are read-only, meaning that a component cannot
          modify its props directly. They are passed from parent components to
          child components, allowing data to flow downwards in the component
          hierarchy.
        </p>
        <br />
        <div className="code">
          <p>function Welcome(props) &#123;</p>
          <p> return &lt;h1&gt;Hello, &#123;props.name&#125;&lt;/h1&gt;;</p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  );
};

export default Lesson8;
