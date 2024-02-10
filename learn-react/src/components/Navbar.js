import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <Link href="/">ReactTutorial</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/learn">Learn</Link>
          {/* <Link href="/">About</Link>
          <Link href="/">Contact</Link> */}
        </div>
        <div className="appearance">
          <div className="light-dark"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
