import { ProjectUpdate } from '@components/admin/projectUpdate/ProjectUpdate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProjectView } from '@components/admin/projectView/ProjectView';
import { ProjectNew } from '@components/admin/projectNew/ProjectNew';
import { Footer } from "./components/layouts/footer/Footer";
import { Nav } from "./components/layouts/nav/Nav";
import { Admin } from "./pages/admin/Admin";
import { Home } from "./pages/home/Home";
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
