import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Admin from "./pages/admin/Admin";
import ProjectNew from '@components/admin/ProjectNew';
import ProjectUpdate from '@components/admin/ProjectUpdate';
import ProjectView from '@components/admin/ProjectView';

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
          <Route path="/projects/:id/update" element={<ProjectUpdate />} />
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
