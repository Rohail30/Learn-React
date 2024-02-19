import React from 'react';
import './Lesson.css';

const Lesson5 = () => {
  return (
    <div className="lesson">
      <div className="reactContent">
        <h1>React Structure </h1>
        <br />
        <div class="structure">
          <strong>
            <p>my-react-app/</p>
            <p>&nbsp;&nbsp;|- public/</p>
            <p>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|- index.html</p>
            <p>&nbsp;&nbsp;|- src/</p>
            <p>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|- index.js</p>
            <p>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|- App.js</p>
            <p>&nbsp;&nbsp;|- package.json</p>
          </strong>
        </div>
        <br />
        <p>
          1. <strong>public/:</strong> This directory contains static assets
          that will be served by your web server The index.html file inside this
          directory is the main HTML file of your application.
        </p>
        <br />
        <p>
          <strong>index.html:</strong> This file is the entry point of your
          React application. It typically contains an empty 'div' with an id
          where your React components will be rendered. For example:
        </p>
        <br />
        <div className="code">
          <p>&lt;!DOCTYPE html&gt;</p>
          <p>&lt;html lang="en"&gt;</p>
          <p>&lt;head&gt;</p>
          <p>&nbsp;&nbsp;&lt;meta charset="utf-8"&gt; /</p>
          <p>&nbsp;&nbsp;&lt;title&gt;My React App&lt;/title&gt;</p>
          <p>&lt;/head&gt;</p>
          <p>&lt;body&gt;</p>
          <p>&nbsp;&nbsp;&lt;div id="root"&gt;&lt;/div&gt;</p>
          <p>&lt;/body&gt;</p>
          <p>&lt;/html&gt;</p>
        </div>
        <br />
        <p>
          2. <strong>src/:</strong> This directory contains the source code of
          your React application.
        </p>
        <br />
        <p>
          <strong>index.js:</strong> This file is the entry point of your React
          application. It typically renders the root component of your
          application into the DOM. For example:
        </p>
        <br />
        <div className="code">
          <p>import React from 'react';</p>
          <p>import ReactDOM from 'react-dom';</p>
          <p>import App from './App';</p>
          <p>
            ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));
          </p>
        </div>
        <br />
        <p>
          <strong>App.js:</strong> This file contains the main component of your
          application. It's where you define the structure and behavior of your
          application. For example:
        </p>
        <br />
        <div className="code">
          <p>import React from 'react';</p>
          <p>function App() &#123;</p>
          <p> return (</p>
          <p> &lt;div&gt;</p>
          <p> &lt;h1&gt;Hello, World!&lt;/h1&gt;</p>
          <p> &lt;/div&gt;</p>
          <p> );</p>
          <p>&#125;</p>
          <p>export default App;</p>
        </div>
        <br />
        <p>
          3. <strong>package.json:</strong> This file contains metadata about
          your project, as well as the dependencies and scripts needed to run
          your application. For example:
        </p>
        <br />
        <div className="code">
          <p>
            <code>&#123;</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;"name": "my-react-app",</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;"version": "1.0.0",</code>
          </p>
          <p>
            <code>
              &nbsp;&nbsp;"description": "A simple React application",
            </code>
          </p>
          <p>
            <code>&nbsp;&nbsp;"scripts": &#123;</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;"start": "react-scripts start",</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;"build": "react-scripts build",</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;"test": "react-scripts test",</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;"eject": "react-scripts eject"</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&#125;,</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;"dependencies": &#123;</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;"react": "^17.0.2",</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;"react-dom": "^17.0.2",</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;"react-scripts": "5.0.0"</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&#125;,</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;"devDependencies": &#123;&#125;,</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;"browserslist": &#123;</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;"production": [</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&gt;0.2%",</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"not dead",</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"not op_mini all"</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;],</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;"development": [</code>
          </p>
          <p>
            <code>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last 1 chrome version",
            </code>
          </p>
          <p>
            <code>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last 1 firefox version",
            </code>
          </p>
          <p>
            <code>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last 1 safari version"
            </code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;]</code>
          </p>
          <p>
            <code>&nbsp;&nbsp;&#125;</code>
          </p>
          <p>
            <code>&#125;</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson5;
