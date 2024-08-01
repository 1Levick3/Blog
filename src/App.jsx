import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Pgmain from './Pgmain';
import Cardprofile from './Cardprofile';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function LoadingScreen({ onFinished }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinished, 1000); // Duration of the fade-out transition
    }, 3000); // Duration before starting the fade-out

    return () => clearTimeout(timeout);
  }, [onFinished]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-name">Левик</div>
      <div className="blocks">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className={`block block-${index + 1}`}></div>
        ))}
      </div>
    </div>
  );
}

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
  const [loading, setLoading] = useState(true);

  const handleLoadingFinished = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingScreen onFinished={handleLoadingFinished} />}
      <div className={`main-content ${loading ? 'hidden' : ''}`}>
        {!loading && (
          <>
            <Header />
            <AnimatedRoutes />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
