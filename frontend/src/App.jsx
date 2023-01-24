import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Admin from "./pages/admin/Admin";
import ProjectNew from '@components/admin/ProjectNew';

import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/projects/new" element={<ProjectNew />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
