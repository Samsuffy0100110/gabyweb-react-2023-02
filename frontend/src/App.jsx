import { ProjectDashboard } from '@pages/admin/projectDashboard/ProjectDashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProjectUpdate } from '@pages/admin/projectUpdate/ProjectUpdate';
import { ProjectView } from '@pages/admin/projectView/ProjectView';
import { ProjectNew } from '@pages/admin/projectNew/ProjectNew';
import { Footer } from "./components/layouts/footer/Footer";
import { ProtectedRoute } from './utils/ProtectedRoute';
import { LoginForm } from "./pages/login/LoginForm";
import { Nav } from "./components/layouts/nav/Nav";
import { Project } from "./pages/project/Project";
import { Logout } from "./pages/logout/Logout";
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
          <Route path="/project/:id" element={<Project/>} />
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
