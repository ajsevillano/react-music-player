//Import FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Import FontAwesome actual icons
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  //Ref to the audio html selector
  const audioRef = useRef(null);

  //Events Handlers
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
    });
  };

  //Aux function
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  //State for the song info
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
