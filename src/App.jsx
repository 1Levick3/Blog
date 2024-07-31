import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import {Route, Routes, useLocation } from 'react-router-dom';
import Pgmain from './Pgmain';
import Cardprofile from './Cardprofile';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

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
  return (<>
    
      <Header />
      <AnimatedRoutes />
      <Footer />
    
  </>);
}

export default App;
