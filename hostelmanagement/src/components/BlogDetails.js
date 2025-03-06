import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogsData from "../components/blogs.json"; // ✅ Import JSON directly
import Footer from "./Footer";



export default function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Directly set data from the imported JSON
    setData(blogsData);
    setLoading(false);
  }, []);

  // ✅ Find the blog post based on the ID
  const item = useMemo(
    () => data.find((d) => d.id === parseInt(id, 10)),
    [data, id]
  );

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  if (!item) {
    return (
      <div className="text-center">
        <h2 className="text-red-500 text-xl">Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div>
    <div className="container mx-auto px-6 py-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-700 hover:text-gray-900 mb-6"
      >
        <svg
          className="w-6 h-6 mr-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        Back
      </button>
      <h1 className="text-5xl font-extrabold">{item.title}</h1>
      <p className="text-lg text-blue-600 font-semibold mt-4">{item.category}</p>

      {/* Author Section */}
      {item.author && (
        <div className="flex items-center mt-8">
          <img
            src={item.author.profile_image || "/default-profile.png"} // ✅ Default profile image
            alt={item.author.name}
            className="w-14 h-14 rounded-full shadow-lg"
            loading="lazy"
          />
          <div className="ml-4">
            <p className="text-xl font-bold">{item.author.name}</p>
            <p className="text-gray-600">{item.author.bio}</p>
          </div>
        </div>
      )}

      {/* Image */}
      <img
        src={item.image || "https://via.placeholder.com/600x300?text=No+Image"} // ✅ Default image if missing
        alt={item.title}
        loading="lazy"
        className="w-full h-96 object-cover rounded-lg shadow-lg mt-8"
      />

      {/* Content Section */}
      <div className="mt-12">
        {item.sections ? (
          item.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{section.heading}</h2>
              <ul className="list-disc pl-6 space-y-3">
                {Array.isArray(section.points) &&
                  section.points.map((point, i) => (
                    <li key={i} className="text-lg leading-relaxed">{point}</li>
                  ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-lg leading-relaxed">{item.description}</p>
        )}
      </div>
    </div>
      <Footer />
    </div>  
  );
}
