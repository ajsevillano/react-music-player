const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h3 style={{ color: currentSong.color[1] }}>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
