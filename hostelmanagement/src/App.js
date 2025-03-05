import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./pages/Home";
import BlogWebsite from "./pages/BlogWebsite";
import BlogGrid from "./pages/Blog";
import BlogDetails from "./components/BlogDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <div style= {{ fontFamily: 'Montserrat' }}>
    <Router>
      <Routes>
        <Route path="/" element={<BlogWebsite />} />
        <Route path="/blogs" element={<BlogGrid />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div> 
  );
}
