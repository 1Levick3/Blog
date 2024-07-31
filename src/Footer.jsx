
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light py-3">
      <div className="container d-flex justify-content-between">
        <span><a className='linka' target="_blank" title='Legal' href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>Авторские права &copy; 2024 Левик</a></span>
        <span>Вдохновлено <a className='linka' target="_blank" title="🌸 [δ] - Based on MDsveX & SvelteKit 🌸" href='https://github.com/importantimport/urara'><b>Урарой</b></a></span>
      </div>
    </footer>
  );
};

export default Footer;
