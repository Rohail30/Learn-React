import React from 'react';
import './Lesson.css';

const Lesson6 = () => {
  return (
    <div className="lesson">
      <div className="reactContent">
        <h1>JS vs JSX</h1>
        <br />
        <p>
          JSX stands for JavaScript XML. It's a syntax extension for JavaScript
          that allows you to write HTML-like code within JavaScript. JSX makes
          it easier to write and structure React components by combining the
          power of JavaScript with the familiarity of HTML.
        </p>
        <br />
        <p>
          With JSX, you can define React elements using a syntax that closely
          resembles HTML/XML. For example:
        </p>
        <br />
        <div className="code">
          <p>
            <code>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</code>
          </p>
        </div>
        <br />
        <p>
          In the above code,{' '}
          <strong>&lt;h1&gt;Hello, world!&lt;/h1&gt;;</strong> is JSX syntax
          that represents a React element. When compiled, JSX is transformed
          into regular JavaScript function calls, making it understandable by
          browsers. Under the hood, the above JSX code is equivalent to:
        </p>
        <br />
        <div className="code">
          <p>
            <code>
              const element = React.createElement('h1', null, 'Hello, world!');
            </code>
          </p>
        </div>
        <br />
        <p>
          JSX allows you to embed JavaScript expressions within curly braces
          &#123;&#125;. This enables you to dynamically generate content, such
          as:
        </p>
        <br />
        <div className="code">
          <p>
            <code>const name = 'John';</code>
          </p>
          <p>
            <code>
              const element = &lt;h1&gt;Hello, &#123;name&#125;!&lt;/h1&gt;;
            </code>
          </p>
        </div>
        <br />
        <p>
          JSX is not mandatory for writing React applications, but it's a widely
          adopted convention in the React community due to its readability and
          ease of use.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Lesson6;
