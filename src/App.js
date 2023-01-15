import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
