export interface SongObjetProps {
  active: boolean;
  artist: string;
  audio: string;
  color: string[];
  cover: string;
  id: string;
  name: string;
}

export interface LibraryProps {
  songs: SongObjetProps[];
  setCurrentSong: React.Dispatch<React.SetStateAction<SongObjetProps>>;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setSongs: React.Dispatch<React.SetStateAction<SongObjetProps[]>>;
}

