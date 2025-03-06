import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import blogsData from "../components/blogs.json"; // ✅ Import JSON directly

export default function BlogGrid() {
  useEffect(() => {
    AOS.init({ duration: 300, once: true, delay: 30 }); // ✅ Faster animation
  }, []);

  // ✅ Memoize the blog data to avoid re-renders
  const blogs = useMemo(() => blogsData, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Blogs</h2>

      {/* ✅ Handle empty blog data efficiently */}
      {blogs.length === 0 ? (
        <p className="text-center text-gray-600">No blogs available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl flex flex-col h-full" // ✅ Smoother hover effect
              data-aos="fade-up"
            >
              <img
                src={blog.image || "https://via.placeholder.com/600x300?text=Loading..."}
                alt={blog.title || "Blog Image"}
                className="w-full h-56 object-cover"
                loading="lazy" // ✅ Lazy loading for better performance
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-blue-600 font-semibold">{blog.category}</p>
                <h3 className="text-xl font-bold mt-2 text-gray-900">{blog.title}</h3>

                {/* ✅ Optimized text truncation */}
                <div className="flex-grow">
                  <p className="text-gray-600 mt-2">
                    {blog.description?.length > 100
                      ? `${blog.description.substring(0, 100)}...`
                      : blog.description}
                  </p>
                </div>

                {/* ✅ "Read More" link is fixed at the bottom */}
                <div className="mt-auto">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-purple-600 font-semibold inline-block hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
