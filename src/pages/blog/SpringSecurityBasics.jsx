import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import ssb1 from "../../assets/ssb1.avif";
import ssb2 from "../../assets/ssb2.jpg";
import ssb3 from "../../assets/ssb3.avif";
import {
  TbLockCheck,
  TbShieldCheck,
  TbLockFilled,
  TbTargetArrow,
  TbWorldWww,
} from "react-icons/tb";
import { FaUserCheck } from "react-icons/fa";
import { HiTicket } from "react-icons/hi2";
import { IoKey } from "react-icons/io5";
import { RiBroadcastFill } from "react-icons/ri";
import { AiOutlineStop } from "react-icons/ai";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { FaKey, FaShieldAlt } from "react-icons/fa";

const SpringSecurityBasics = () => {
  const { theme, t } = useApp();
  const navigate = useApp().navigate;
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "what-is", title: "What is Spring Security?" },
    { id: "filter-chain", title: "Security Filter Chain" },
    { id: "rest-api", title: "Securing REST APIs" },
    { id: "best-practices", title: "Best Practices" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (slug) => {
    navigate(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <article
      className={`min-h-screen py-8 md:py-20 px-4 md:px-6 ${
        theme === "light" ? "text-neutral-800" : "text-neutral-200"
      }`}
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Navigation Tree - Left Sidebar */}
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
                    onClick={() => scrollToSection(section.id)}
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

        {/* Divider */}
        <div
          className={`hidden lg:block w-px ${
            theme === "light" ? "bg-gray-300" : "bg-gray-700"
          }`}
        ></div>

        {/* Main Content */}
        <div className="flex-1 w-full max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <div className="pg-5px mb-6">
              <span
                className={`mt-10 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
                  theme === "light"
                    ? "bg-green-500/20 text-green-700"
                    : "bg-green-400/30 text-green-200"
                }`}
              >
                Java • Backend • 2025
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight">
              Spring Security Basics for Backend Developers
            </h1>

            <p
              className={`text-xl leading-relaxed ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              A comprehensive guide to understanding how Spring Security works
              and how to secure REST APIs effectively
            </p>
          </header>

          {/* Intro Section */}
          <section
            className={`mb-12 rounded-2xl p-8 border ${
              theme === "light" ? " border-gray-400" : " border-gray-600"
            }`}
          >
            <p className="text-lg leading-relaxed">
              Spring Security is the de-facto standard for securing Java backend
              applications. It provides a powerful and flexible framework for
              handling authentication, authorization, and protection against
              common security vulnerabilities.
            </p>
          </section>

          {/* Hero Image */}
          <div className="mb-12 overflow-hidden ">
            <img
              src={ssb1}
              alt="Backend security concept"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* What is Spring Security */}
          <section id="what-is" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              What is Spring Security?
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Spring Security is a framework focused on two core concepts:
              <strong
                className={
                  theme === "light" ? "text-purple-700" : "text-purple-400"
                }
              >
                {" "}
                authentication
              </strong>{" "}
              and{" "}
              <strong
                className={
                  theme === "light" ? "text-purple-700" : "text-purple-400"
                }
              >
                authorization
              </strong>
              . Every incoming HTTP request is intercepted by a chain of
              security filters before it reaches your application logic.
            </p>

            <div className={`grid gap-4 rounded-xl p-6 `}>
              <div
                className={`flex items-start gap-4 p-5 rounded-full ${
                  theme === "light" ? "bg-white/70" : "bg-gray-800"
                }`}
              >
                <span className="text-2xl">
                  <TbLockCheck size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Authentication</h3>
                  <p
                    className={
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }
                  >
                    Who are you? Verifying user identity
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-4 p-5 rounded-full ${
                  theme === "light" ? "bg-white/70" : "bg-gray-800"
                }`}
              >
                <span className="text-2xl">
                  <FaUserCheck size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Authorization</h3>
                  <p
                    className={
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }
                  >
                    What are you allowed to do? Managing permissions
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-4 p-5 rounded-full ${
                  theme === "light" ? "bg-white/70" : "bg-gray-800"
                }`}
              >
                <span className="text-2xl">
                  <TbShieldCheck size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Protection</h3>
                  <p
                    className={
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }
                  >
                    Defense against CSRF, session fixation, and common attacks
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Filter Chain */}
          <section id="filter-chain" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Understanding the Security Filter Chain
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Spring Security processes requests through a filter chain. Each
              filter has a specific responsibility, such as validating
              credentials or checking permissions.
            </p>

            <div
              className={`rounded-xl ${
                theme === "light"
                  ? "bg-neutral-900 text-green-400"
                  : "bg-neutral-950 text-green-300"
              }`}
            >
              <img
                src={ssb2}
                alt="Backend security concept"
                className="w-full h-[700px] object-fill"
              />
            </div>
          </section>

          {/* API Image */}
          <div className="mb-12 overflow-hidden">
            <img
              src={ssb3}
              alt="API security illustration"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* REST API Security */}
          <section id="rest-api" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Securing REST APIs with Spring Security
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              For RESTful APIs, Spring Security is commonly used in a stateless
              manner. Instead of relying on server-side sessions, the client
              sends credentials or tokens with every request.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div
                className={`p-6 rounded-xl border ${
                  theme === "light"
                    ? "bg-white/70 border-gray-300 hover:border-gray-500"
                    : "bg-neutral-900/70 border-gray-600 hover:border-gray-300"
                } transition-colors`}
              >
                <div className="text-3xl mb-3">
                  <HiTicket size={30} />
                </div>
                <h3 className="font-semibold mb-2">JWT</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  JSON Web Tokens for stateless authentication
                </p>
              </div>

              <div
                className={`p-6 rounded-xl border ${
                  theme === "light"
                    ? "bg-white/70 border-gray-300 hover:border-gray-500"
                    : "bg-neutral-900/70 border-gray-600 hover:border-gray-300"
                } transition-colors`}
              >
                <div className="text-3xl mb-3">
                  <IoKey size={30} />
                </div>
                <h3 className="font-semibold mb-2">OAuth2</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Industry standard for authorization
                </p>
              </div>

              <div
                className={`p-6 rounded-xl border ${
                  theme === "light"
                    ? "bg-white/70 border-gray-300 hover:border-gray-500"
                    : "bg-neutral-900/70 border-gray-600 hover:border-gray-300"
                } transition-colors`}
              >
                <div className="text-3xl mb-3">
                  <TbLockFilled size={30} />
                </div>
                <h3 className="font-semibold mb-2">Basic Auth</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Simple authentication for internal use
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Best Practices
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: <TbLockFilled size={30} />,
                  text: "Always hash passwords using BCrypt or Argon2",
                },
                {
                  icon: <RiBroadcastFill size={30} />,
                  text: "Prefer stateless authentication for REST APIs",
                },
                {
                  icon: <TbTargetArrow size={30} />,
                  text: "Protect sensitive endpoints with proper role-based access",
                },
                {
                  icon: <AiOutlineStop size={30} />,
                  text: "Never log credentials, tokens, or sensitive data",
                },
                {
                  icon: <MdOutlineWifiProtectedSetup size={30} />,
                  text: "Keep security dependencies up to date regularly",
                },
                {
                  icon: <TbWorldWww size={30} />,
                  text: "Use HTTPS in production environments",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 border rounded-xl ${
                    theme === "light"
                      ? "border-gray-400 hover:border-gray-700 hover:bg-gray-300"
                      : "border-gray-500 hover:border-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-lg pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          <section className="mt-16 pt-8 border-t border-gray-700">
            <h2
              className={`mb-8 text-2xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => handleNavigate("JwtSpringBoot")}
                className={`text-left p-6 rounded-xl transition border ${
                  theme === "light"
                    ? "bg-white border-gray-300 hover:border-orange-500 hover:shadow-lg"
                    : "bg-gray-800 border-gray-700 hover:border-orange-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-3">
                  <FaKey className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
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
                      Learn how to implement secure JWT-based authentication
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleNavigate("DtoMappingSpring")}
                className={`text-left p-6 rounded-xl transition border ${
                  theme === "light"
                    ? "bg-white border-gray-300 hover:border-blue-500 hover:shadow-lg"
                    : "bg-gray-800 border-gray-700 hover:border-blue-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      DTO Mapping with MapStruct
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "light"
                          ? "text-neutral-600"
                          : "text-neutral-400"
                      }`}
                    >
                      Master data transformation with efficient DTO mapping
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

export default SpringSecurityBasics;
