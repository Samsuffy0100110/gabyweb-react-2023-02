import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Nav from "./components/layouts/nav/Nav";
import Footer from "./components/layouts/footer/Footer";
import Admin from "./pages/admin/Admin";
import ProjectNew from '@components/admin/projectNew/ProjectNew';
import ProjectUpdate from '@components/admin/projectUpdate/ProjectUpdate';
import ProjectView from '@components/admin/projectView/ProjectView';

import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/project/new" element={<ProjectNew />} />
          <Route path="/project/:id/update" element={<ProjectUpdate />} />
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
