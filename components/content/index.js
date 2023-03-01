import { useEffect, useRef } from "react";
import YouTube from 'react-youtube';


export default function LocationBanner() {
    
    const opts = {
        height: '190',
        width: '100%',
        margin: 0,
        padding: 0,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1, // Set mute to 1 to mute the video on load
        },
      };
    const videoRef = useRef();
  
    useEffect(() => {
      const player = videoRef.current?.internalPlayer;
  
      player?.mute();
    }, []);
  
    return (
      <div className="w-full bg-black m-0 p-0">
        <div className="flex justify-center m-0 p-0 md:h-800 md:w-1990 scroll-smooth">
          <YouTube
            videoId="CMg4_n1NmfQ"
            opts={opts}
            id="banner-video"
            ref={videoRef}
          />
        </div>
      </div>
    );
  }

