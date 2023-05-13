import "../My stylesheet/Musicplayer.css"
import { Icon } from "./icon";
import { useEffect, useRef, useState } from 'react';
import { faBackwardStep, faCirclePause, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";

const Controls = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  useEffect ( () =>{
    if (isPlaying) {
      audioRef . current.play();
    } else {
      audioRef . current.pause();
    }
  }, [isPlaying, audioRef]

  )

  return (
    <div>
      <button className="button">
        <Icon css='icon' icon={faBackwardStep} />    
      </button>
      <button className="button" onClick={togglePlayPause}>
        {isPlaying ? 
        <Icon css='icon' icon={faCirclePause} /> : <Icon css='icon' icon={faCirclePlay} />
        }
      </button>
      <button className="button">
        <Icon css='icon' icon={faForwardStep} />
      </button>
    </div>
  );
};

export default Controls;


