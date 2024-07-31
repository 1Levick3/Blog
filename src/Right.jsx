import { useEffect } from 'react';
import './Right.css';

const YouTubePlayer = () => {
  useEffect(() => {
    // Function to create the YouTube player after the API script loads
    const onYouTubeIframeAPIReady = () => {
      new window.YT.Player('player', {
        height: '390',
        width: '640',
        playerVars: {
          listType: 'playlist',
          list: 'PLIkYl2ksw5irYkAUbBJp2OG28k3LPdQUB', // Replace with your playlist ID
        },
      });
    };

    // Check if the YouTube API script is loaded
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      // Add an event listener to execute the function when the script is loaded
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
