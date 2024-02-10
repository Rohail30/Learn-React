import './App.css';
import Home from './components/Home';
import Learn from './components/Learn';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import { Toggle } from './components/Toggle';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);
  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <Navbar />
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn/*" element={<Learn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
