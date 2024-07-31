import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pgmain from './Pgmain';
import Cardprofile from './Cardprofile';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pgmain />} />
        <Route path="/post/:id" element={<Cardprofile />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
