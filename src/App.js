//Components
import Song from './components/Song';
import Player from './components/Player';

//Styles
import './styles/app.scss';

//Data
import data from './data';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
