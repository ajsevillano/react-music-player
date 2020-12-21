//Import FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Import FontAwesome actual icons
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
}) => {
  //Events Handlers
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const dragHandler = (e) => {
    const timeValue = e.target.value;
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: timeValue });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[currentIndex - (1 % songs.length)]);
    }
  };

  //Aux function
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{formatTime(songInfo.duration)}</p>
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
