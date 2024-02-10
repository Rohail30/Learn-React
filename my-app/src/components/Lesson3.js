import React from 'react';
import './Lesson.css';

const Lesson3 = () => {
  return (
    <div className="lesson">
      <div className="reactContent">
        <h1>What is Node.js?</h1>
        <br />
        <p>
          Node.js is a platform that allows you to run JavaScript code on your
          computer or server outside of a web browser. In simple terms, it's
          like a playground where you can use JavaScript to build applications
          that do all sorts of things, like creating web servers, handling data,
          running scripts, and much more.
        </p>
        <br />
        <p>
          Traditionally, JavaScript was mainly used for creating interactive
          elements on websites, like buttons and animations. But with Node.js,
          you can now use JavaScript to do many other things beyond just web
          development. It opens up opportunities to build server-side
          applications, command-line tools, desktop applications, and even IoT
          (Internet of Things) devices.
          <br />
          <br />
          Node.js comes with a set of built-in modules that make it easy to
          perform tasks like reading and writing files, making network requests,
          and handling events. Additionally, there's a vast ecosystem of
          third-party modules available through npm (Node Package Manager),
          which you can use to extend the functionality of your Node.js
          applications.
        </p>
      </div>
    </div>
  );
};

export default Lesson3;
