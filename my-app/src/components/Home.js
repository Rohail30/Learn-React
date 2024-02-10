// HomeContent.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-content">
      <div className="texts">
        <h2 className="text">Welcome to our React learning hub!</h2>
        <h3 className="text">
          <span>Build dynamic web interfaces effortlessly</span>
        </h3>
        <p>
          🚀Let's kickstart your journey into React, where we'll uncover the
          magic of building dynamic web interfaces together. Ready to dive in
          and level up your skills? Let's do this! 💪
        </p>
        <div className="button">
          <Link to="/learn">Getting started</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
