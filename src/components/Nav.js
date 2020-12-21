//Import FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Import FontAwesome actual icons
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Music Player</h1>
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
