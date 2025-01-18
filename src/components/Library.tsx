import LibrarySong from './LibrarySong';

interface Song {
  id: string;
  name: string;
  artist: string;
  cover: string;
  active: boolean;
}

interface LibraryProps {
  songs: Song[];
  setCurrentSong: (song: Song) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setSongs: (songs: Song[]) => void;
  libraryStatus: boolean;
}

const Library: React.FC<LibraryProps> = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs-map">
        {songs.map((song: Song) => (
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
