import React from 'react';
import './Learn.css';
import Sidebar from './Sidbar';
import Lesson1 from './Lesson1';
import { Routes, Route } from 'react-router-dom';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Start from './Start';
import Lesson4 from './Lesson4';
import Lesson5 from './Lesson5';
import Lesson6 from './Lesson6';
import Lesson7 from './Lesson7';
import Lesson8 from './Lesson8';

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
          <Route path="/lesson4" element={<Lesson4 />} />
          <Route path="/lesson5" element={<Lesson5 />} />
          <Route path="/lesson6" element={<Lesson6 />} />
          <Route path="/lesson7" element={<Lesson7 />} />
          <Route path="/lesson8" element={<Lesson8 />} />
        </Routes>
      </div>
    </div>
  );
};

export default Learn;
