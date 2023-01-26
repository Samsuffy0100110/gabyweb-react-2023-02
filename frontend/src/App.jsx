import { ProjectUpdate } from '@components/admin/projectUpdate/ProjectUpdate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProjectView } from '@components/admin/projectView/ProjectView';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { ProjectNew } from '@components/admin/projectNew/ProjectNew';
import { Footer } from "./components/layouts/footer/Footer";
import { LoginForm } from "./components/login/LoginForm";
import { Nav } from "./components/layouts/nav/Nav";
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
          <Route path="/project/new" element={<ProjectNew />} />
          <Route path="/project/:id/update" element={<ProjectUpdate />} />
          <Route path="/project/:id" element={<ProjectView />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<Logout />} />
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
