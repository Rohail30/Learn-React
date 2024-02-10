import React from 'react';
import './Learn.css';
import Sidebar from './Sidbar';
import Lesson1 from './Lesson1';
import { Routes, Route } from 'react-router-dom';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Start from './Start';

const Learn = () => {
  return (
    <div className="learn">
      <Sidebar />
      <div className="reactContent">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/lesson2" element={<Lesson2 />} />
          <Route path="/lesson3" element={<Lesson3 />} />
        </Routes>
      </div>
    </div>
  );
};

export default Learn;
