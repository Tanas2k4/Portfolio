import { useState } from 'react';
import { useApp } from '../context/AppContext'; 
import { useNavigate } from "react-router-dom";


const blogs = [
  {
    id: 1,
    title: "Why I choose .NET Core and Spring Boot for my future",
    tag: "Backend",
    date: "9.2024",
    slug: "/blog/spring-boot",
    excerpt: "The framework that changed enterprise development"
  },
  {
    id: 2,
    title: "Spring Security Basics for Backend Devs",
    tag: "Java",
    date: "2024",
    slug: "/blog/spring-security-basics",
    excerpt: "How Spring Security works and how to secure REST APIs"
  },
  {
    id: 3,
    title: "Building REST APIs with .NET",
    tag: ".NET",
    date: "2024",
    slug: "/blog/dotnet-rest-api",
    excerpt: "Designing clean and maintainable RESTful APIs in ASP.NET"
  },
  {
    id: 4,
    title: "Runnable vs Thread in Java",
    tag: "Java",
    date: "2024",
    slug: "/blog/runnable-vs-thread",
    excerpt: "Choosing the right way to create threads using Runnable and Thread"
  },
  {
    id: 5,
    title: "Understanding Deadlock in Java",
    tag: "Java",
    date: "2024",
    slug: "/blog/java-deadlock",
    excerpt: "What deadlocks are, why they happen, and how to prevent them in Java applications"
  },
  {
    id: 6,
    title: "Async & Await Best Practices in JavaScript",
    tag: "JavaScript",
    date: "2024",
    slug: "/blog/js-async-await",
    excerpt: "Writing clean and predictable asynchronous JavaScript code"
  },
  {
    id: 7,
    title: "JavaScript Closures Demystified",
    tag: "JavaScript",
    date: "2024",
    slug: "/blog/js-closures",
    excerpt: "Understanding closures through simple and practical examples"
  },
  {
    id: 8,
    title: "DTO Mapping in Spring Boot",
    tag: "Java",
    date: "2024",
    slug: "/blog/dto-mapping-spring",
    excerpt: "Best practices for mapping Entity to DTO using MapStruct and ModelMapper"
  },
  {
    id: 9,
    title: "JWT Authentication in Spring Boot",
    tag: "Java",
    date: "2024",
    slug: "/blog/jwt-spring-boot",
    excerpt: "Implementing stateless authentication with JWT in Spring Boot"
  },
  {
    id: 10,
    title: "Ruby on Rails in 2025",
    tag: "Ruby",
    date: "2024",
    slug: "/blog/ruby-rails",
    excerpt: "Why Rails is still relevant in modern web dev"
  }
];


const Blog = () => {
  const { theme, t } = useApp();
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (slug) => {
    navigate(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="blog"
      className="min-h-screen w-full flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center gap-16 md:gap-20">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
          <h1 className="text-center text-5xl md:text-7xl">
          <span className={`font-light bg-clip-text text-transparent ${
            theme === 'light'
              ? 'bg-gradient-to-r from-gray-800 to-gray-600'
              : 'bg-gradient-to-r from-white to-gray-400'
          }`}>
            {t.myBlog}
          </span>
        </h1>
          
        </div>

        {/* Marquee Section */}
        <div className="w-full">
          {/* OUTER WRAPPER – tạo vùng an toàn */}
          <div className="relative w-full py-20">
            
            {/* MASK LAYER */}
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            />

            {/* CONTENT – cho phép hover bung */}
            <div className="relative z-20 overflow-visible">
              <style>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 60s linear infinite;
                }
                .animate-marquee.paused {
                  animation-play-state: paused;
                }
              `}</style>

              <div
                className={`flex w-max gap-6 animate-marquee ${
                  isPaused ? "paused" : ""
                }`}
              >
                {[...blogs, ...blogs, ...blogs].map((blog, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => handleNavigate(blog.slug)}
                    className={`
                      group
                      min-w-[280px] md:min-w-[320px]
                      h-[240px]
                      hover:h-auto
                      cursor-pointer
                      rounded-2xl
                      p-5
                      transition-all duration-500 ease-out
                      hover:-translate-y-3
                      hover:scale-[1.15]
                      hover:z-30
                      relative
                      flex flex-col
                      ${
                        theme === "light"
                          ? "bg-white/80 backdrop-blur-sm border-2 border-gray-300 hover:shadow-2xl hover:shadow-gray-300/60"
                          : "bg-gray-900/60 backdrop-blur-sm border-2 border-gray-700 hover:shadow-2xl hover:shadow-black/40"
                      }
                    `}
                  >
                    {/* Tag + Date */}
                    <div className="flex items-center gap-2 mb-4 shrink-0">
                      <span
                        className={`
                          px-3 py-1 rounded-full text-xs font-semibold
                          ${
                            theme === "light"
                              ? "bg-gray-200 text-gray-700"
                              : "bg-gray-800 text-gray-300"
                          }
                        `}
                      >
                        {blog.tag}
                      </span>
                      <span
                        className={`text-xs ${
                          theme === "light" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {blog.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        text-xl md:text-2xl font-bold leading-snug mb-3
                        transition-all duration-300
                        line-clamp-2
                        group-hover:line-clamp-none
                        ${
                          theme === "light"
                            ? "text-gray-900 group-hover:text-gray-700"
                            : "text-white group-hover:text-gray-200"
                        }
                      `}
                    >
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className={`
                        text-sm leading-relaxed mb-5
                        transition-all duration-300
                        line-clamp-3
                        group-hover:line-clamp-none
                        ${
                          theme === "light"
                            ? "text-gray-600"
                            : "text-gray-400"
                        }
                      `}
                    >
                      {blog.excerpt}
                    </p>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Read More */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(blog.slug);
                      }}
                      className={`
                        flex items-center gap-2 text-sm font-medium
                        transition-all duration-300
                        group-hover:gap-3
                        ${
                          theme === "light"
                            ? "text-gray-700 hover:text-gray-900"
                            : "text-gray-300 hover:text-white"
                        }
                      `}
                    >
                      <span>{t.readMore}</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* View All Button */}
        <button
          onClick={() => handleNavigate("/blog")}
          className={`
            group
            px-8 py-4 rounded-full
            text-base font-semibold
            transition-all duration-300
            hover:scale-105
            ${
              theme === "light"
                ? "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl"
                : "bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-2xl"
            }
          `}
        >
          <span className="flex items-center gap-2">
            {t.viewAllPosts}
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Blog;