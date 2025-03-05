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
  const [isAtTop, setIsAtTop] = useState(true); // Track if user is at the top of the page
  const [showNavbar, setShowNavbar] = useState(false); // Track if navbar should be shown
  const [scrollDirection, setScrollDirection] = useState("up"); // Track scroll direction
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state
  const lastScrollY = useRef(0); // Store the last scroll position
  const mobileMenuRef = useRef(null); // Ref for the mobile menu

  // Handle click outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user is at the top of the page
      if (currentScrollY === 0) {
        setIsAtTop(true);
        setShowNavbar(false); // Hide navbar at the top
      } else {
        setIsAtTop(false);
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down"); // Scrolling down
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up"); // Scrolling up
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY > window.innerHeight && scrollDirection === "up") {
        setShowNavbar(true); // Show navbar when scrolling up past home section
      } else if (scrollDirection === "down") {
        setShowNavbar(false); // Hide navbar when scrolling down
      }

        // Close mobile menu when scrolling
        setIsMobileMenuOpen(false);

      // Show scroll-to-top button when scrolled past 200px
      setShowScrollButton(currentScrollY > 200);

      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="overflow-x-hidden">
      <style>{`html { scroll-behavior: smooth; overflow-x: hidden; }`}</style>

      {/* Logo and Buttons (Fixed at the top) */}
      {isAtTop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAtTop ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 w-full p-4 z-50"
        >
          <div className="container mx-auto flex justify-between items-center mt-5">
            {/* Logo - Aligned to the Left */}
            <img src={logo} alt="Logo" className="h-14" />

            {/* Navigation Buttons - Aligned to Right in a Row */}
            <div className="hidden md:flex space-x-6 mr-10 text-2xl">
              {["Home", "Blog", "About", "Contact"].map((name, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const section = document.getElementById(name.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-white transition font-medium cursor-pointer hover:text-[#FFD806]"
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white text-2xl focus:outline-none"
            >
              <FaBars />
            </button>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu (Conditionally Rendered) */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed top-20 right-4 bg-[#0A0F1E] p-4 rounded-lg shadow-lg z-50"
        >
          <div className="flex flex-col space-y-4">
            {["Home", "Blog", "About", "Contact"].map((name, index) => (
              <button
                key={index}
                onClick={() => {
                  const section = document.getElementById(name.toLowerCase());
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMobileMenuOpen(false); // Close menu after clicking
                }}
                className="text-white transition font-medium cursor-pointer hover:text-[#FFD806]"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navbar (Appears after scrolling past home section) */}
      {showNavbar && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 w-full bg-[#0A0F1E] p-4 z-50 shadow-lg"
        >
          <div className="container flex justify-end">
            {/* Navigation Buttons */}
            <div className="hidden md:flex space-x-6 text-xl">
              {["Home", "Blog", "About", "Contact"].map((name, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const section = document.getElementById(name.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-white transition font-medium cursor-pointer hover:text-[#FFD806]"
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white text-2xl focus:outline-none"
            >
              <FaBars />
            </button>
          </div>
        </motion.nav>
      )}

      {/* Home Section */}
      <section id="home" className="relative w-full h-screen flex items-center justify-center text-center">
        <img className="absolute top-0 left-0 w-full h-full object-cover" src={bg} alt="Background" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-white"
        >
          <h1 className="text-4xl sm:text-5xl font-bold">Innovate. Code. Transform.</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl px-4 font-bold">
          Exploring Thoughts, One Post at a Time.
          </p>
          <button
            onClick={() => {
              const blogSection = document.getElementById("blog");
              if (blogSection) {
                blogSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-6 bg-transparent hover:bg-[#FFD806] text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 text-lg sm:text-xl"
          >
            Explore the Blog
          </button>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section id="blog">
        <Blog />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}

      <Footer />
      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#FFD806] h-12 w-12 text-white font-bold justify-center rounded-full hover:[#A07F02] transition-all duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
} 