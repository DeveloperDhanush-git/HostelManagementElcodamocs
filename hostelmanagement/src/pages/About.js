import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "../assets/about 1.png";
import ceo from "../assets/ceo 1.png";
import about2 from "../assets/about 2.png"
import about3  from "../assets/career.png"
import about4  from "../assets/account.png"

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 100, // Reduced duration for faster animations (500ms)
      once: true, // Animations only happen once
    });
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div data-aos="fade-right" data-aos-duration="500">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            We are committed to delivering innovative solutions that drive digital transformation
            and empower businesses to thrive in a rapidly evolving world.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="500">
          <img
            src={about2}
            alt="About Us"
            className="w-full rounded-lg shadow-lg h-90"
          />
        </div>
      </section>

      {/* Mission Section (Image Left, Text Right) */}
      <section className="grid md:grid-cols-2 gap-12 mb-12">
        <div data-aos="fade-right" data-aos-duration="500">
          <img
            src={about3}
            alt="Mission" 
            className="w-full rounded-lg shadow-lg h-90"
          />
        </div>
        <div className="flex flex-col justify-center" data-aos="fade-left" data-aos-duration="500">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600 text-lg">
            To build cutting-edge solutions that simplify complex business challenges and
            create lasting value for our customers.
          </p>
        </div>
      </section>

      {/* Vision Section (Image Right, Text Left) */}
      <section className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="flex flex-col justify-center" data-aos="fade-right" data-aos-duration="500">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-600 text-lg">
            To be a global leader in technology innovation, driving sustainable growth and
            digital excellence for businesses worldwide.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="500">
          <img
            src={about4}
            alt="Vision"
            className="w-full rounded-lg shadow-lg h-90"
          />
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8" data-aos="fade-up" data-aos-duration="100">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="zoom-in" data-aos-duration="500">
            <img src={ceo} alt="CEO" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="zoom-in" data-aos-duration="550" data-aos-delay="200">
            <img src={ceo} alt="CTO" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Jane Smith</h3>
            <p className="text-gray-600">Chief Technology Officer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
            <img src={ceo} alt="COO" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Michael Johnson</h3>
            <p className="text-gray-600">Chief Operating Officer</p>
          </div>
        </div>
      </section>
    </div>
  );
}