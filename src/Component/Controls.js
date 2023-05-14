import "../My stylesheet/Musicplayer.css"
import { Icon } from "./icon";
import { useEffect, useRef, useState, useCallback } from 'react';
import { faBackwardStep, faCirclePause, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";


const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress }) => {
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

  //The requestAnimationFrame API//
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
  
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);
  

useEffect(() => {
  if (isPlaying) {
    audioRef.current.play();
    playAnimationRef.current = requestAnimationFrame(repeat);
  } else {
    audioRef.current.pause();
    cancelAnimationFrame(playAnimationRef.current);
  }
}, [isPlaying, audioRef, repeat]);
//end//

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


