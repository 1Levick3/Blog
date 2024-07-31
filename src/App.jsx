import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Pgmain from './Pgmain';
import Cardprofile from './Cardprofile';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useEffect } from 'react';
import backgroundImage from './assets/landscape.png'; // Adjust the path as needed

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<Pgmain />} />
          <Route path="/post/:id" element={<Cardprofile />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundColor = '#292E39';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.position = 'relative';
    document.body.style.minHeight = '100vh';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    return () => {
      // Clean up the styles when the component unmounts
      document.body.style.backgroundImage = '';
      document.body.style.backgroundColor = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.position = '';
      document.body.style.minHeight = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
    };
  }, []);

  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
