import React from 'react';
import './Lesson.css';

const Lesson2 = () => {
  return (
    <div className="lesson">
      <div className="reactContent">
        <h1>Getting Started Guide</h1>
        <br />
        <h4>
          You are going to need these three thing to start your react project:
        </h4>
        <br />
        <p>
          <li>Code Editor (VS Code)</li>
          <li>Web Browser</li>
          <li>Node.js</li>
        </p>
        <br />

        <h3>Code Editor (VS Code):</h3>
        <br />
        <li>Download and Install VS Code from the official website.</li>
        <li>
          Open VS Code and create a new file with a .js extension to start
          writing React code.
        </li>
        <li>
          Customize VS Code with React-specific extensions like ESLint,
          Prettier, and React Native Tools for better development experience.
        </li>
        <li>
          Explore features such as syntax highlighting, code completion, and
          integrated terminal.
        </li>
        <br />
        <h3>Web Browser:</h3>
        <br />
        <li>
          Install and open a modern web browser like Google Chrome, Mozilla
          Firefox, or Microsoft Edge.
        </li>
        <li>
          Use the browser's developer tools to inspect elements, debug
          JavaScript code, and monitor network requests while developing React
          applications.
        </li>
        <li>
          Ensure that the browser is up-to-date to support modern JavaScript
          features and React libraries.
        </li>
        <br />
        <h3>Node.js:</h3>
        <br />
        <li>Download and Install Node.js from the official website.</li>
        <li>
          Node.js comes with npm (Node Package Manager) pre-installed, which is
          used for managing JavaScript packages and dependencies.
        </li>
        <li>
          Open a terminal or command prompt and run <code>node -v</code> and{' '}
          <code>npm -v</code> commands to verify the installation.
        </li>
        <li>
          Install Create React App globally using npm by running{' '}
          <code>npm install -g create-react-app</code>. This tool automates the
          setup process and provides a scaffold for building React applications.
        </li>
        <li>
          Create a new React project by running{' '}
          <code>npx create-react-app my-react-app</code> in the terminal.
          Replace <code>my-react-app</code> with the desired name of your
          project.
        </li>
        <li>
          Navigate to the project directory (<code>cd my-react-app</code>) and
          start the development server by running <code>npm start</code>. This
          will open your React application in the default web browser.
        </li>
      </div>
    </div>
  );
};

export default Lesson2;
