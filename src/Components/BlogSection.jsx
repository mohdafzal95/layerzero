import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FallingMeteors from "../Components/starts";
import BlinkingStarsBackground from "../Components/BlinkingStarsBackground";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";



import AOS from "aos";
import "aos/dist/aos.css";

const BlogSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const blogs = [
    {
      title: "AIRDROP GUIDE: STEPS TO CLAIM YOUR $MOYE TOKENS",
      image:blog1,
      date: "June 1, 2023",
      slug: "steps-to-claim-your-moye-token",
    },
    {
      title: "Indian Frog | $MOYE — THE BEGINNING",
      image:blog2,
      date: "June 5, 2023",
      slug: "moye-the-beginning",
    },
    {
      title: "Unleashing Novelty: The Era of Thematic Cryptocurrencies",
      image:blog3,
      date: "June 10, 2023",
      slug: "the-era-of-thematic-cryptocurrencies",
    },
  ];

  const handleBlogClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div id="blog" className="bg-ocean-blue-900 pb-10">
      <div className="  absolute">
        <BlinkingStarsBackground />
      </div>
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 z-10"
        data-aos="fade-up"
      >
        <h2 className=" text-2xl md:text-4xl font-bold mb-8 text-center text-white p-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white flex flex-col rounded-3xl shadow-lg overflow-hidden p-4 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleBlogClick(blog.slug);
              }}
            >
              <h3 className="text-xl font-bold mb-2 py-3 text-black h-28">
                {blog.title}
              </h3>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-3xl h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-black text-sm">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
