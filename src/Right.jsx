import { useEffect } from 'react';
import './Right.css';

const YouTubePlayer = () => {
  useEffect(() => {
 
    const onYouTubeIframeAPIReady = () => {
      new window.YT.Player('player', {
        height: '390',
        width: '640',
        playerVars: {
          listType: 'playlist',
          list: 'PLIkYl2ksw5ipR0pYv8LC7NWHGNZwOcDiY', 
        },
      });
    };

   
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
  }, []);

  return (
    <div id="player"></div>
  );
};

const Right = () => {
  return (
    <div className="right-container">
      <div className="card right-card">
        <div className="card-body">
          <h5 className="card-title">музыка</h5>
          <p className="card-text"></p>
          <YouTubePlayer />
        </div>
      </div>
    </div>
  );
};

export default Right;
