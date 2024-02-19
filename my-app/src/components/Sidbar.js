import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const sidebar = () => {
  return (
    <div className="sidebar">
      <input type="checkbox" id="sidebarToggle" />
      <div className="side">
        <label htmlFor="sidebarToggle" className="openbtn">
          ☰
        </label>
        <NavLink to="/learn/lesson1">What is React?</NavLink>
        <NavLink to="/learn/lesson2">Getting Started</NavLink>
        <NavLink to="/learn/lesson3">What is Node.js?</NavLink>
        <NavLink to="/learn/lesson4">How to start?</NavLink>
        <NavLink to="/learn/lesson5">React Structure?</NavLink>
        <NavLink to="/learn/lesson6">JS and JSX in React</NavLink>
        {/* <NavLink to="/">New Project</NavLink> */}
      </div>
    </div>
  );
};

export default sidebar;
