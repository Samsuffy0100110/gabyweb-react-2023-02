import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Admin from "./pages/Admin";

import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
