import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><b>./levick.sh</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="dropdown-menu dropdown-menu-end">
          <Link className="dropdown-item" title='About' to="/post/post2">О</Link>
          <Link className="dropdown-item" title='Projects' to="/post/post1">Проекты</Link>
          <a className="dropdown-item" title='Booksmarks' target="_blank" href="https://airtable.com/appUVHB29NzA8Tysi/shrpftxf6JgRomP2X/tblEvtThXHNBMQ8lW/viw85qtohQ98gVHN8">Закладки</a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-none d-lg-flex">
            <li className="nav-item">
              <Link className="nav-link" title='About' to="/post/post2">О</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" title='Projects' to="/post/post1">Проекты</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" title='Bookmarks' href="https://airtable.com/appUVHB29NzA8Tysi/shrpftxf6JgRomP2X/tblEvtThXHNBMQ8lW/viw85qtohQ98gVHN8">Закладки</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
