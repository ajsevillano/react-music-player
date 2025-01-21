import { SongObjetProps,LibraryProps } from '../GlobalTypes';
import LibrarySong from './LibrarySong';

interface LibraryComponentProps extends LibraryProps {
  libraryStatus: boolean;
}

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}:LibraryComponentProps) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs-map">
        {songs.map((song: SongObjetProps) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
