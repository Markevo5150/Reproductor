import { useState } from 'react';
import "../My stylesheet/Musicplayer.css"


const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="buttons">
        <button></button>
        <button></button>
        <button></button>
    </div>
  );
};

export default Controls;