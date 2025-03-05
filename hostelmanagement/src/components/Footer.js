import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-[#0A0F1E] text-[#EAEAEA] p-8 sm:p-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <h3 className="text-xl font-semibold text-[#FFD806]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {[
              { name: "Home", id: "home" },
              { name: "Blog", id: "blog" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-gray-300 hover:text-[#FFD806] transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#FFD806]">Categories</h3>
          <ul className="mt-4 space-y-2">
            {["Tech News", "AI & Machine Learning", "Web Development", "Cybersecurity", "Programming Tips"].map(
              (category, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#FFD806] transition">
                    {category}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#FFD806]">Recent Posts</h3>
          <ul className="mt-4 space-y-2">
            {[
              "How AI is Revolutionizing Development",
              "Top 10 JavaScript Tricks You Should Know",
              "Cybersecurity in 2025: What You Must Know",
            ].map((post, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 hover:text-[#FFD806] transition">
                  {post}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#FFD806]">Follow Us</h3>
          <div className="mt-4 flex justify-center space-x-6 text-3xl">
            <a href="#" className="text-gray-300 hover:text-[#FFD806] transition"><FaGithub /></a>
            <a href="#" className="text-gray-300 hover:text-[#FFD806] transition"><FaLinkedin /></a>
            <a href="#" className="text-gray-300 hover:text-[#FFD806] transition"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-[#FFD806] transition"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
    )
  };
  
  export default Footer;
  