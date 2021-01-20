//Import FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Import FontAwesome actual icons
import { faMusic } from '@fortawesome/free-solid-svg-icons';
//Import Logo
import logo from '../assets/images/logo.svg';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>React Music Player</h1>
      </div>
      <button
        onClick={() => {
          setLibraryStatus(!libraryStatus);
        }}
      >
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
