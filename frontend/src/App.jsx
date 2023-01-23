import Home from "./pages/Home";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import "./App.scss";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
