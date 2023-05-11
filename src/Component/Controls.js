import "../My stylesheet/Musicplayer.css"
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';

const Controls = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div>
      <button className="buttons"><IoPlaySkipBackSharp /></button>
      <button className="buttonsPlay" onClick={togglePlayPause}>
        {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
      </button>
      <button className="buttons"><IoPlaySkipForwardSharp /></button>
    </div>
  );
};

export default Controls;


