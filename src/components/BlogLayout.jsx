import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";

const BlogLayout = ({
  categoryTag,
  title,
  subtitle,
  heroImage,
  sections = [],
  relatedArticles = [],
  children,
}) => {
  const { language, navigate } = useApp();
  const [activeSection, setActiveSection] = useState("");

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (
          el &&
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const handleNavigate = (slug) => {
    navigate(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article
      className="min-h-screen py-8 md:py-20 px-4 md:px-6 text-neutral-800 bg-[#f6f4ee]"
      style={{
        fontFamily: language === "vi" ? "Inter, sans-serif" : "inherit",
      }}
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Sidebar Table of Contents */}
        {sections.length > 0 && (
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="p-4">
                <h3 className="font-semibold mb-4 text-sm text-neutral-400">
                  {language === "en" ? "Contents" : "Mục lục"}
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full text-left py-2 transition-all border-none bg-transparent cursor-pointer ${
                        activeSection === section.id
                          ? "text-neutral-900 font-bold text-lg"
                          : "text-neutral-500 text-sm hover:text-neutral-900"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>
        )}

        {sections.length > 0 && (
          <div className="hidden lg:block w-px bg-gray-200"></div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 w-full max-w-4xl">
          <header className="mb-12">
            {categoryTag && (
              <span className="inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-700">
                {categoryTag}
              </span>
            )}
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-neutral-900">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl mt-4 leading-relaxed text-neutral-500">
                {subtitle}
              </p>
            )}
          </header>

          {/* Optional Hero/Banner Image */}
          {heroImage && (
            <div className="mb-12 rounded-none overflow-hidden border border-neutral-300/70">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          )}

          {/* Render the actual post sections/elements */}
          <div className="prose max-w-none">
            {children}
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-8 text-neutral-900">
                {language === "en" ? "Related Articles" : "Bài viết liên quan"}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((article, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavigate(article.slug)}
                    className={`text-left p-6 rounded-none transition border bg-white border-gray-200 cursor-pointer ${
                      article.hoverColor || "hover:border-black"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {article.icon && (
                        <div className={`text-2xl flex-shrink-0 mt-1 ${article.iconColor || "text-neutral-600"}`}>
                          {article.icon}
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold mb-2 text-neutral-900">
                          {article.title}
                        </h3>
                        {article.description && (
                          <p className="text-sm text-neutral-500">
                            {article.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogLayout;
