//Components
import Song from './components/Song';
import Player from './components/Player';

//Styles
import './styles/app.scss';

//Data
import data from './data';
import { useState } from 'react';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
