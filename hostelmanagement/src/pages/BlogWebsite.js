import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import logo from "../assets/el.png";
import bg from "../assets/background.png";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";

export default function BlogWebsite() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef(null);

  // Cursor Movement Effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);
      setShowScrollButton(currentScrollY > 200);
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      setShowNavbar(currentScrollY > window.innerHeight && scrollDirection === "up");
      setIsMobileMenuOpen(false);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden relative">
      <style>{`html { scroll-behavior: smooth; overflow-x: hidden; }`}</style>

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-10 h-10 bg-red-500 rounded-full opacity-30 pointer-events-none"
        animate={{ x: cursorPos.x - 20, y: cursorPos.y - 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 8 }}
      />
      <motion.div
        className="fixed w-6 h-6 bg-[#69205D] rounded-full opacity-50 pointer-events-none"
        animate={{ x: cursorPos.x - 10, y: cursorPos.y - 10 }}
        transition={{ type: "spring", stiffness: 250, damping: 9 }}
      />
      
      {/* Navbar */}
      {isAtTop && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }} className="fixed top-0 w-full p-4 z-50">
          <div className="container mx-auto flex justify-between items-center mt-5">
            <img src={logo} alt="Logo" className="h-14" />
            <div className="hidden md:flex space-x-6 mr-10 text-2xl">
              {["Home", "Blog", "About", "Contact"].map((name, index) => (
                <button
                  key={index}
                  onClick={() => document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white transition font-medium cursor-pointer hover:text-[#FFD806]"
                >
                  {name}
                </button>
              ))}
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white text-2xl">
              <FaBars />
            </button>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden fixed top-20 right-4 bg-[#0A0F1E] p-4 rounded-lg shadow-lg z-50">
          <div className="flex flex-col space-y-4">
            {["Home", "Blog", "About", "Contact"].map((name, index) => (
              <button
                key={index}
                onClick={() => {
                  document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-white transition font-medium cursor-pointer hover:text-[#FFD806]"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen flex items-center justify-center text-center">
        <img className="absolute top-0 left-0 w-full h-full object-cover" src={bg} alt="Background" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="relative z-10 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">Innovate. Code. Transform.</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl px-4 font-bold">
            Exploring Thoughts, One Post at a Time.
          </p>
          <button
            onClick={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-6 bg-transparent hover:bg-[#FFD806] text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-200 text-lg sm:text-xl"
          >
            Explore the Blog
          </button>
        </motion.div>
      </section>

      {/* Sections */}
      <section id="blog"><Blog /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#FFD806] h-12 w-12 text-white font-bold justify-center rounded-full hover:bg-[#A07F02] transition-all duration-200"
        >
          ↑
        </button>
      )}
    </div>
  );
}
