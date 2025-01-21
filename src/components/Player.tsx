//Import FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Import FontAwesome actual icons
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import { SongObjetProps } from '../GlobalTypes';
import { useEffect } from 'react';

interface PlayerProps {
  songs: SongObjetProps[];
  currentSong: SongObjetProps;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioRef: React.RefObject<HTMLAudioElement>;
  songInfo: SongInfoProps;
  setSongInfo: React.Dispatch<React.SetStateAction<SongInfoProps>>;
  setCurrentSong: React.Dispatch<React.SetStateAction<SongObjetProps>>;
  setSongs: React.Dispatch<React.SetStateAction<SongObjetProps[]>>;
}

interface SongInfoProps {
  currentTime: number;
  duration: number;
  animationPercentage: number;
}

type SkipDirection = 'skip-forward' | 'skip-back';

const Player = ({
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
}:PlayerProps) => {

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [audioRef, currentSong, isPlaying]); 

  const activeLibraryHandler = (nextPrev: SongObjetProps) => {

    //Add active state
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
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
  };

  //Events Handlers
  const playSongHandler = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const dragHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const timeValue = parseFloat(e.target.value);
   
    if (audioRef.current) {
      audioRef.current.currentTime = timeValue;
    }
    setSongInfo({ ...songInfo, currentTime: timeValue });
  };

  const skipTrackHandler = (direction: SkipDirection) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let newIndex;
  
    if (direction === 'skip-forward') {
      newIndex = (currentIndex + 1) % songs.length;
    }
    if (direction === 'skip-back') {
      newIndex = (currentIndex - 1 + songs.length) % songs.length;
    }
  
    const nextSong = songs[newIndex ?? 0];
    setCurrentSong(nextSong); 
    activeLibraryHandler(nextSong);
  };

  //Add the styles to the player bar
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  //Aux function
  const formatTime = (time:number) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            id="time-controller"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <label htmlFor="time-controller">Drag to move forward or backward </label>
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? formatTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler('skip-back');
          }}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler('skip-forward');
          }}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
