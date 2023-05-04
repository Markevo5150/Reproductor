const DisplayTrack = ( { currentTrack }) => {
    return (
      <div>
        <audio src={currentTrack} />
      </div>
    );
  };
  export default DisplayTrack;