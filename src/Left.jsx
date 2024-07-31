
import './Left.css';
import { FaGithub, FaTelegram, FaSteam, FaDiscord } from 'react-icons/fa';
import profileImage from './assets/boredapelevi200.png'; // Update this path accordingly

const Left = () => {
  return (
    <div className="left-container">
      <div className="profile-card card">
        <img src={profileImage} className="card-img-top profile-image" alt="Profile" />
        <div className="card-body text-center">
          <h3 className="card-title">Левик</h3>
          <p>  </p>
          <p className="card-text">Я продолжал мечтать о мире, который думал, что никогда не увижу. И потом, однажды...</p>
          <div className="social-icons">
            <a href="https://github.com/1Levick3" target="_blank" className="btn btn-outline-secondary"><FaGithub /></a>
            <a href="#" className="btn btn-outline-secondary"><FaDiscord /></a>
            <a href="#" className="btn btn-outline-secondary"><FaTelegram /></a>
            <a href="https://steamcommunity.com/profiles/76561199443614169" target="_blank" className="btn btn-outline-secondary"><FaSteam /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
