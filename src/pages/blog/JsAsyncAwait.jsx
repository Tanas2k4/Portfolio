import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaLock,
} from "react-icons/fa";
import { MdWarning, MdSpeed, MdCheckCircle } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { AiOutlineLoading, AiOutlineClockCircle } from "react-icons/ai";
import { GiChainedHeart } from "react-icons/gi";
import { RiErrorWarningLine } from "react-icons/ri";

const JsAsyncAwait = () => {
  const { theme, t } = useApp();
  const navigate = useApp().navigate;
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "what-is", title: "What is Async/Await?" },
    { id: "basics", title: "Basic Syntax" },
    { id: "error-handling", title: "Error Handling" },
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
                    className={`w-full text-left py-2 transition-all border-none bg-transparent ${
                      activeSection === section.id
                        ? theme === "light"
                          ? "text-gray-700 font-bold text-lg"
                          : "text-gray-100 font-bold text-lg"
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
            <div className="mb-6">
              <span
                className={`mt-10 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
                  theme === "light"
                    ? "bg-yellow-500/20 text-yellow-700"
                    : "bg-yellow-400/30 text-yellow-200"
                }`}
              >
                JavaScript • Async • 2024
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight">
              Async & Await Best Practices in JavaScript
            </h1>

            <p
              className={`text-xl leading-relaxed ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              Writing clean and predictable asynchronous JavaScript code
            </p>
          </header>

          <section
            className={`mb-12 rounded-2xl p-8 border ${
              theme === "light"
                ? "bg-blue-50 border-blue-300"
                : "bg-blue-900/20 border-blue-600"
            }`}
          >
            <div className="flex items-start gap-4">
              <AiOutlineClockCircle className="text-blue-500 text-3xl flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                Async/await is syntactic sugar built on top of Promises that
                makes asynchronous code look and behave more like synchronous
                code, making it easier to read, write, and maintain.
              </p>
            </div>
          </section>

          <section id="what-is" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              What is Async/Await?
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Introduced in ES2017, async/await provides a cleaner syntax for
              working with asynchronous operations. It allows you to write
              asynchronous code that reads like synchronous code without
              blocking the main thread.
            </p>

            <div className={`grid md:grid-cols-2 gap-4 mb-6`}>
              <div
                className={`flex items-start gap-4 p-5 rounded-lg ${
                  theme === "light"
                    ? "bg-white border border-gray-300"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                <AiOutlineLoading className="text-blue-500 text-3xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">async Function</h3>
                  <p
                    className={`text-sm ${
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }`}
                  >
                    Returns a Promise automatically
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-4 p-5 rounded-lg ${
                  theme === "light"
                    ? "bg-white border border-gray-300"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                <FaClock className="text-green-500 text-3xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">await Keyword</h3>
                  <p
                    className={`text-sm ${
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }`}
                  >
                    Pauses execution until Promise resolves
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="basics" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Basic Syntax
            </h2>

            <h3 className="text-xl font-semibold mb-4">
              Before: Promise Chains
            </h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <RiErrorWarningLine className="text-orange-500" size={24} />
                <span className="font-semibold text-orange-500">
                  Old Way - Promise Chains
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>
                  {`function fetchUserData() {
                  fetch('/api/user')
                    .then(response => response.json())
                    .then(user => {
                      return fetch(\`/api/posts/\${user.id}\`);
                    })
                    .then(response => response.json())
                    .then(posts => {
                      console.log('User posts:', posts);
                    })
                    .catch(error => {
                      console.error('Error:', error);
                    });
                }`}
                </code>
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-4">After: Async/Await</h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <MdCheckCircle className="text-green-500" size={24} />
                <span className="font-semibold text-green-500">
                  Modern Way - Async/Await
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>
                  {`async function fetchUserData() {
                  try {
                    const response = await fetch('/api/user');
                    const user = await response.json();
                    
                    const postsResponse = await fetch(\`/api/posts/\${user.id}\`);
                    const posts = await postsResponse.json();
                    
                    console.log('User posts:', posts);
                  } catch (error) {
                    console.error('Error:', error);
                  }
                }`}
                </code>
              </pre>
            </div>
          </section>

          <section id="error-handling" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Error Handling
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Proper error handling is crucial in async functions. Use try-catch
              blocks to handle errors gracefully.
            </p>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <BiError className="text-red-500" size={24} />
                <span className="font-semibold">
                  Comprehensive Error Handling
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>
                  {`async function fetchData(url) {
                  try {
                    const response = await fetch(url);
                    
                    // Check if response is ok
                    if (!response.ok) {
                      throw new Error(\`HTTP error! status: \${response.status}\`);
                    }
                    
                    const data = await response.json();
                    return data;
                    
                  } catch (error) {
                    // Handle different error types
                    if (error.name === 'TypeError') {
                      console.error('Network error:', error.message);
                    } else if (error.name === 'SyntaxError') {
                      console.error('JSON parsing error:', error.message);
                    } else {
                      console.error('Unknown error:', error);
                    }
                    
                    // Re-throw or return default value
                    throw error;
                  }
                }`}
                </code>
              </pre>
            </div>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <MdCheckCircle className="text-green-500" size={24} />
                <span className="font-semibold text-green-500">
                  Finally Block for Cleanup
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>
                  {`async function uploadFile(file) {
                  let loader = showLoader();
                  
                  try {
                    const formData = new FormData();
                    formData.append('file', file);
                    
                    const response = await fetch('/api/upload', {
                      method: 'POST',
                      body: formData
                    });
                    
                    return await response.json();
                    
                  } catch (error) {
                    console.error('Upload failed:', error);
                    showError('Failed to upload file');
                    
                  } finally {
                    // Always runs, even if error occurs
                    hideLoader(loader);
                  }
                }`}
                </code>
              </pre>
            </div>
          </section>

          <section id="best-practices" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Best Practices
            </h2>

            <h3 className="text-2xl font-semibold mb-4">
              1. Parallel Execution with Promise.all
            </h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <BiError className="text-red-500" size={24} />
                <span className="font-semibold text-red-500">
                  {" "}
                  Slow - Sequential Execution
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>
                  {`// Takes 3 seconds total (1s + 1s + 1s)
                  async function fetchAllData() {
                    const users = await fetch('/api/users');      // 1s
                    const posts = await fetch('/api/posts');      // 1s
                    const comments = await fetch('/api/comments'); // 1s
                    
                    return { users, posts, comments };
                  }`}
                </code>
              </pre>
            </div>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <MdSpeed className="text-green-500" size={24} />
                <span className="font-semibold text-green-500">
                  {" "}
                  Fast - Parallel Execution
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>
                  {`// Takes ~1 second total (all run in parallel)
                  async function fetchAllData() {
                    const [users, posts, comments] = await Promise.all([
                      fetch('/api/users'),
                      fetch('/api/posts'),
                      fetch('/api/comments')
                    ]);
                    
                    return { users, posts, comments };
                  }

                  // Or with Promise.allSettled to handle partial failures
                  async function fetchAllDataSafe() {
                    const results = await Promise.allSettled([
                      fetch('/api/users'),
                      fetch('/api/posts'),
                      fetch('/api/comments')
                    ]);
                    
                    return results.map(result => 
                      result.status === 'fulfilled' ? result.value : null
                    );
                  }`}
                </code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">
              2. Avoid Mixing Async/Await with .then()
            </h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <MdWarning className="text-orange-500" size={24} />
                <span className="font-semibold text-orange-500">
                  Inconsistent - Mixed Style
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>
                  {`// Don't mix styles
                async function mixedStyle() {
                  const user = await fetch('/api/user');
                  return user.json().then(data => {  // Mixing styles
                    return data;
                  });
                }`}
                </code>
              </pre>
            </div>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <MdCheckCircle className="text-green-500" size={24} />
                <span className="font-semibold text-green-500">
                  Clean - Consistent Style
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`// Use consistent async/await
                  async function consistentStyle() {
                    const user = await fetch('/api/user');
                    const data = await user.json();  // Consistent
                    return data;
                  }`}
                </code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">
              3. Top-Level Async Patterns
            </h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`
                  // Modern: Top-level await (ES2022+)
                  const data = await fetch('/api/data');
                  const json = await data.json();

                  // Or wrap in IIFE for older environments
                  (async () => {
                    const data = await fetch('/api/data');
                    const json = await data.json();
                    console.log(json);
                  })();`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Key Takeaways</h3>

            <div className="space-y-4">
              {[
                {
                  icon: <MdSpeed />,
                  text: "Use Promise.all() for parallel execution to improve performance",
                },
                {
                  icon: <BiError />,
                  text: "Always wrap await calls in try-catch for proper error handling",
                },
                {
                  icon: <GiChainedHeart />,
                  text: "Use finally blocks for cleanup code that must always run",
                },
                {
                  icon: <FaCheckCircle />,
                  text: "Keep async/await style consistent - avoid mixing with .then()",
                },
                {
                  icon: <MdCheckCircle />,
                  text: "Return Promises directly when you don't need to await",
                },
                {
                  icon: <FaExclamationTriangle />,
                  text: "Be careful with await in loops - consider Promise.all() instead",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 border rounded-xl transition ${
                    theme === "light"
                      ? "border-gray-400 hover:border-gray-700 hover:bg-gray-100"
                      : "border-gray-500 hover:border-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <span className="text-2xl flex-shrink-0 text-blue-500">
                    {item.icon}
                  </span>
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
                onClick={() => handleNavigate("JsClosures")}
                className={`text-left p-6 rounded-xl transition border ${
                  theme === "light"
                    ? "bg-white border-gray-300 hover:border-purple-500 hover:shadow-lg"
                    : "bg-gray-800 border-gray-700 hover:border-purple-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-3">
                  <FaLock className="text-purple-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">JavaScript Closures</h3>
                    <p
                      className={`text-sm ${
                        theme === "light"
                          ? "text-neutral-600"
                          : "text-neutral-400"
                      }`}
                    >
                      Master scope and closures in JavaScript
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleNavigate("DotnetRestApi")}
                className={`text-left p-6 rounded-xl transition border ${
                  theme === "light"
                    ? "bg-white border-gray-300 hover:border-blue-500 hover:shadow-lg"
                    : "bg-gray-800 border-gray-700 hover:border-blue-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Building REST APIs with .NET Core
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "light"
                          ? "text-neutral-600"
                          : "text-neutral-400"
                      }`}
                    >
                      Create modern REST APIs with async operations
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

export default JsAsyncAwait;
