import { Dispatch, SetStateAction } from 'react';

interface Song {
  id: string;
  name: string;
  artist: string;
  cover: string;
  active: boolean;
}

interface LibrarySongProps {
  song: Song;
  songs: Song[];
  setCurrentSong: Dispatch<SetStateAction<Song>>;
  id: string;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setSongs: Dispatch<SetStateAction<Song[]>>;
}

const LibrarySong: React.FC<LibrarySongProps> = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current?.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
