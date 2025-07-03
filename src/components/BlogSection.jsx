import React from "react";

const blogs = [
  {
    date: "January 11, 2023",
    title: "Top Benefits Of Switching To Cloud-Based ERP Software",
    excerpt:
      "As new businesses and enterprises are coming up every day and expanding, the management process has become very complex and...",
  },
  {
    date: "December 9, 2022",
    title: "Retail ERP: A Comprehensive Guide",
    excerpt:
      "If you are a retailer or run your business, you must understand that you must deal with not one but...",
  },
  {
    date: "November 28, 2022",
    title: "How ERP Software Can Improve Your Logistics Management Process",
    excerpt:
      "How ERP Software improves your Logistics Management Process. The word ‘logistic’ was first used as a military term which...",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative px-6 py-10 flex flex-col justify-between group transition-all duration-300 bg-white hover:bg-gray-100"
            >
              <p className="italic text-gray-500 text-sm mb-4">{blog.date}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-[#00aeef]">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-base mb-6">{blog.excerpt}</p>

              <span className="font-bold text-gray-700">READ MORE</span>

              {/* Bottom line animation */}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#00aeef] transition-all duration-500 group-hover:w-full transform -translate-x-1/2"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
