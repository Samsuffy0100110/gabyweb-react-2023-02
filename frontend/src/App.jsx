import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { LoginForm } from "./pages/login/LoginForm";
import { Logout } from "./pages/logout/Logout";
import { Admin } from "./pages/admin/Admin";
import { Home } from "./pages/home/Home";
import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
      </Router>
    </div>
  );
}

export default App;
