// src/pages/blog/RubyRails2025.jsx
import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import { FaRocket, FaShieldAlt, FaUserCheck, FaUsers, FaChartLine } from "react-icons/fa";
import { MdCheckCircle, MdWarning } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { LiaBroadcastTowerSolid } from "react-icons/lia";
import rr1 from "../../assets/rr1.png";
import rr2 from "../../assets/rr2.png";
import rr3 from "../../assets/rr3.png";
import rr4 from "../../assets/rr4.png";
import rr5 from "../../assets/rr5.png";
import rr6 from "../../assets/rr6.jpg";
import rr7 from "../../assets/rr7.webp";
const RubyRails2025 = () => {
  const { theme, navigate } = useApp();
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-relevant", title: "Why Rails is Still Relevant in 2025" },
    { id: "new-features", title: "Key Features in Rails 7 & 8" },
    { id: "hotwire-deep", title: "Deep Dive into Hotwire" },
    { id: "performance", title: "Performance Improvements" },
    { id: "best-practices", title: "Best Practices & Modern Stack" },
    { id: "security", title: "Security Considerations" },
    { id: "conclusion", title: "Conclusion & Future" },
  ];

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
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const handleNavigate = (slug) => {
    navigate(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article
      className={`min-h-screen py-8 md:py-20 px-4 md:px-6 ${
        theme === "light" ? "text-neutral-800" : "text-neutral-200"
      }`}
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Sidebar Contents */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className={`p-4`}>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
                Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left py-2 transition-all border-none ${
                      activeSection === section.id
                        ? theme === "light"
                          ? " text-gray-700 font-bold text-lg"
                          : " text-gray-100 font-bold text-lg"
                        : theme === "light"
                        ? "text-neutral-600 text-sm"
                        : "text-neutral-400 text-sm"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        <div
          className={`hidden lg:block w-px ${
            theme === "light" ? "bg-gray-300" : "bg-gray-700"
          }`}
        ></div>

        <div className="flex-1 w-full max-w-4xl">
          <header className="mb-12">
            <span
              className={`mt-10 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
                  theme === "light"
                  ? "bg-red-400/50 text-red-800"
                  : "bg-red-600/50 text-red-200"
              }`}
            >
              Ruby • Rails • 2025
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight leading-tight">
              Ruby on Rails in 2025: Still Going Strong
            </h1>
            <p
              className={`text-xl mt-4 leading-relaxed ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              Why Rails remains one of the most productive and relevant web
              frameworks in modern development
            </p>
          </header>

          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={rr1}
              alt="Is Ruby on Rails still relevant in 2025?"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <section id="introduction" className="mb-16 scroll-mt-24">
            <h2
              className={`text-3xl font-bold mb-6 ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Introduction
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              As we enter 2025, Ruby on Rails (often just "Rails") celebrates
              nearly 20 years since its initial release. Many have predicted its
              decline, yet Rails continues to power thousands of successful
              applications, from startups to enterprise-scale systems like
              Shopify, GitHub, and Airbnb.
            </p>
            <p className="text-lg leading-relaxed">
              With Rails 7 and the upcoming Rails 8, the framework has evolved
              dramatically, embracing modern paradigms while staying true to its
              core philosophy: Convention over Configuration and Developer
              Happiness.
            </p>
          </section>

          <section id="why-relevant" className="mb-16 scroll-mt-24">
            <h2
              className={`text-3xl font-bold mb-6 ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Why Rails is Still Relevant in 2025
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div
                className={`p-6 rounded-xl border text-center ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-700"
                }`}
              >
                <FaRocket className="text-red-500 text-5xl mx-auto mb-4" />
                <h3 className="font-semibold text-xl">
                  Unmatched Productivity
                </h3>
                <p className="mt-3">
                  Scaffolding, migrations, and conventions allow building MVPs
                  in days, not weeks.
                </p>
              </div>
              <div
                className={`p-6 rounded-xl border text-center ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-700"
                }`}
              >
                <FaUsers className="text-blue-500 text-5xl mx-auto mb-4" />
                <h3 className="font-semibold text-xl">Mature Ecosystem</h3>
                <p className="mt-3">
                  Over 200,000 gems, strong community, and battle-tested
                  patterns.
                </p>
              </div>
              <div
                className={`p-6 rounded-xl border text-center ${
                  theme === "light"
                    ? "bg-white border-gray-300"
                    : "bg-gray-800 border-gray-700"
                }`}
              >
                <FaChartLine className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="font-semibold text-xl">Proven Scalability</h3>
                <p className="mt-3">
                  Powers billion-dollar companies with millions of daily users.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*H26UheBrKhn98NRt3ehJow.png"
                alt="Ruby on Rails 8 modern features"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          <section id="new-features" className="mb-16 scroll-mt-24">
            <h2
              className={`text-3xl font-bold mb-6 ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Key Features in Rails 7 & 8 (2024-2025)
            </h2>
            <ul className="space-y-4 text-lg ml-6 list-disc">
              <li>
                <strong>Hotwire (Turbo + Stimulus)</strong> – Native reactivity
                without heavy JavaScript
              </li>
              <li>
                <strong>Multiple Databases Support</strong> – Automatic
                switching between read/write replicas
              </li>
              <li>
                <strong>SQLite for Production</strong> – Now viable for
                medium-scale apps with LiteFS/LiteQueue
              </li>
              <li>
                <strong>Propshaft Asset Pipeline</strong> – Simpler and faster
                than Sprockets/Webpacker
              </li>
              <li>
                <strong>Kamal Deployment</strong> – Zero-downtime deploys to any
                server with Docker
              </li>
              <li>
                <strong>Solid Queue & Solid Cache</strong> – Mission-critical
                background jobs and caching
              </li>
            </ul>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={rr2}
                alt="Rails features infographic"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          <section id="hotwire-deep" className="mb-16 scroll-mt-24">
            <h2
              className={`text-3xl font-bold mb-6 ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Deep Dive into Hotwire
            </h2>
            <p className="text-lg mb-6">
              Hotwire allows building modern, interactive applications with
              minimal JavaScript by sending HTML over the wire.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src={rr3}
                alt="Turbo Streams architecture diagram"
                className="w-full h-auto object-contain bg-white dark:bg-gray-900"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={rr4}
                alt="Rails + Hotwire + Tailwind modern app screenshot"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          <section id="performance" className="mb-16 scroll-mt-24">
            <h2
              className={`text-3xl font-bold mb-6 ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Performance Improvements with YJIT & Beyond
            </h2>
            <p className="text-lg mb-6">
              Ruby 3+ with YJIT delivers 2-3x faster execution. Combined with
              Rails optimizations, real-world apps see significant speed gains.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={rr5}
                alt="Rails performance benchmarks 2025"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          <section id="best-practices" className="mb-16 scroll-mt-24">
            <h2
              className={`text-3xl font-bold mb-6 ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Modern Rails Stack & Best Practices 2025
            </h2>

            <div
              className={`p-6 rounded-xl ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-gray-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <BiCodeBlock className="text-orange-500 text-3xl" />
                <h3 className="text-xl font-semibold">Recommended Gemfile</h3>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`gem "rails", "~> 7.1"
                  gem "hotwire-rails"
                  gem "tailwindcss-rails"
                  gem "devise"
                  gem "pundit"
                  gem "sidekiq"
                  gem "solid_queue"
                  gem "solid_cache"
                  gem "kamal"
                  gem "dockerfile-rails"`}
                </code>
              </pre>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <img
                src={rr6}
                alt="Beautiful Rails UI with Tailwind"
                className="rounded-2xl shadow-xl object-cover h-full"
              />
              <img
                src={rr7}
                alt="Admin panel example in Rails"
                className="rounded-2xl shadow-xl object-cover h-full"
              />
            </div>
          </section>

          <section id="security" className="mb-16 scroll-mt-24">
            <h2
              className={`text-3xl font-bold mb-6 ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Security Best Practices
            </h2>
            <div className="space-y-6">
              <div
                className={`p-5 rounded-xl border ${
                  theme === "light" ? "border-gray-300" : "border-gray-700"
                }`}
              >
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FaShieldAlt className="text-green-500" /> Use Strong
                  Parameters & Content Security Policy
                </h4>
                <p>
                  Rails protects against mass assignment and XSS by default –
                  always keep it enabled.
                </p>
              </div>
              <div
                className={`p-5 rounded-xl border ${
                  theme === "light" ? "border-gray-300" : "border-gray-700"
                }`}
              >
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MdWarning className="text-orange-500" /> Regular Updates
                </h4>
                <p>
                  Stay on latest Rails and Ruby versions for security patches.
                </p>
              </div>
            </div>
          </section>

          <section id="conclusion" className="mb-16 scroll-mt-24">
            <div
              className={`p-8 rounded-2xl border ${
                theme === "light"
                  ? "bg-green-50 border-green-300"
                  : "bg-green-900/20 border-green-700"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <MdCheckCircle className="text-green-500 text-3xl" />
                Conclusion: Rails is Thriving in 2025
              </h3>
              <ul className="space-y-3 text-lg ml-6 list-disc">
                <li>
                  Rails offers the best balance of productivity,
                  maintainability, and modern capabilities
                </li>
                <li>
                  Hotwire enables SPA-like experiences with server-side HTML
                </li>
                <li>
                  Excellent for startups, SaaS products, and long-term projects
                </li>
                <li>Strong job market and community support</li>
                <li>
                  Future looks bright with ongoing innovations from Basecamp and
                  contributors
                </li>
              </ul>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-16 pt-8 border-t ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'}">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => handleNavigate("SpringSecurityBasics")}
                  className={`text-left p-6 rounded-xl transition border ${
                    theme === "light"
                      ? "bg-white border-gray-300 hover:border-green-500 hover:shadow-lg"
                      : "bg-gray-800 border-gray-700 hover:border-green-500 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <FaUserCheck size={30}className="text-green-600 text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        JWT Authentication in Spring Boot
                      </h3>
                      <p
                        className={`text-sm ${
                          theme === "light"
                            ? "text-neutral-600"
                            : "text-neutral-400"
                        }`}
                      >
                        Secure stateless auth implementation
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavigate("SpringSecurityBasics")}
                  className={`text-left p-6 rounded-xl transition border ${
                    theme === "light"
                      ? "bg-white border-gray-300 hover:border-green-500 hover:shadow-lg"
                      : "bg-gray-800 border-gray-700 hover:border-green-500 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <LiaBroadcastTowerSolid  size={30}className="text-sky-600 text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        FastAPI in 2025
                      </h3>
                      <p
                        className={`text-sm ${
                          theme === "light"
                            ? "text-neutral-600"
                            : "text-neutral-400"
                        }`}
                      >
                        Python's fastest growing web framework
                      </p>
                    </div>
                  </div>
                </button>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default RubyRails2025;
