// background.js
import backgroundImage from '/src/assets/landscape.png';

export const setBodyBackground = () => {
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundColor = '#292E39';
};
