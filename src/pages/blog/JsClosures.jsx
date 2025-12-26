import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import {
  FaLock,
  FaBoxOpen,
  FaMemory,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";
import { MdLayers, MdCheckCircle as MdCheck, MdWarning } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { AiOutlineFunction } from "react-icons/ai";
import { GiLockedChest, GiOpenedFoodCan } from "react-icons/gi";
import { RiStackLine } from "react-icons/ri";

const JsClosures = () => {
  const { theme, t } = useApp();
  const navigate = useApp().navigate;
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "what-is", title: "What is a Closure?" },
    { id: "how-work", title: "How Closures Work" },
    { id: "examples", title: "Practical Examples" },
    { id: "use-cases", title: "Common Use Cases" },
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
            <div className="pg-5px mb-6">
              <span
                className={`mt-10 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
                  theme === "light"
                    ? "bg-yellow-500/20 text-yellow-700"
                    : "bg-yellow-400/30 text-yellow-200"
                }`}
              >
                JavaScript • Fundamentals • 2024
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight">
              JavaScript Closures Demystified
            </h1>

            <p
              className={`text-xl leading-relaxed ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              Understanding closures through simple and practical examples
            </p>
          </header>

          <section
            className={`mb-12 rounded-2xl p-8 border ${
              theme === "light"
                ? "bg-purple-50 border-purple-300"
                : "bg-purple-900/20 border-purple-600"
            }`}
          >
            <div className="flex items-start gap-4">
              <GiLockedChest className="text-purple-500 text-3xl flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                A closure is a function that has access to variables in its
                outer (enclosing) lexical scope, even after the outer function
                has returned. It's one of JavaScript's most powerful and
                commonly misunderstood features.
              </p>
            </div>
          </section>

          <section id="what-is" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              What is a Closure?
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Simply put: a closure gives you access to an outer function's
              scope from an inner function. In JavaScript, closures are created
              every time a function is created.
            </p>

            <div
              className={`p-6 rounded-xl mb-6 ${
                theme === "light" ? "bg-neutral-100" : "bg-neutral-900"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">Real-World Analogy</h3>
              <p
                className={`leading-relaxed mb-4 ${
                  theme === "light" ? "text-neutral-700" : "text-neutral-300"
                }`}
              >
                Imagine a backpack 🎒 that a hiker takes on a journey. Even
                after leaving the starting point (outer function returns), the
                hiker still has access to everything in their backpack (outer
                function's variables). The closure is like the backpack - it
                carries the context with it wherever it goes!
              </p>
            </div>

            <div className={`grid md:grid-cols-3 gap-4`}>
              <div
                className={`flex flex-col items-center gap-3 p-5 rounded-lg text-center ${
                  theme === "light"
                    ? "bg-white border border-gray-300"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                <RiStackLine className="text-blue-500 text-4xl" />
                <h3 className="font-semibold">Lexical Scope</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Functions defined inside have access to outer variables
                </p>
              </div>

              <div
                className={`flex flex-col items-center gap-3 p-5 rounded-lg text-center ${
                  theme === "light"
                    ? "bg-white border border-gray-300"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                <FaMemory className="text-green-500 text-4xl" />
                <h3 className="font-semibold">Memory</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Outer variables persist in memory
                </p>
              </div>

              <div
                className={`flex flex-col items-center gap-3 p-5 rounded-lg text-center ${
                  theme === "light"
                    ? "bg-white border border-gray-300"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                <AiOutlineFunction className="text-purple-500 text-4xl" />
                <h3 className="font-semibold">Function Context</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Inner function remembers its environment
                </p>
              </div>
            </div>
          </section>

          <section id="how-work" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              How Closures Work
            </h2>

            <h3 className="text-xl font-semibold mb-4">Basic Example</h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <FaCode className="text-blue-500" size={24} />
                <span className="font-semibold">Simple Closure</span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`  
                  function outerFunction() {
                    const outerVariable = "I'm from outer scope!";
                    
                    function innerFunction() {
                      console.log(outerVariable); // Can access outerVariable!
                    }
                    
                    return innerFunction;
                  }

                  const myFunction = outerFunction();
                  myFunction(); // Output: "I'm from outer scope!"

                  // Even though outerFunction has finished executing,
                  // innerFunction still has access to outerVariable!`}
                </code>
              </pre>
            </div>

            <div
              className={`p-6 rounded-xl border mb-6 ${
                theme === "light"
                  ? "bg-blue-50 border-blue-300"
                  : "bg-blue-900/20 border-blue-700"
              }`}
            >
              <h3 className="text-xl font-semibold mb-3">
                🔍 What's Happening Here?
              </h3>
              <ol className="space-y-2 ml-6 list-decimal">
                <li>
                  <strong>outerFunction</strong> creates a variable and a nested
                  function
                </li>
                <li>
                  The nested <strong>innerFunction</strong> references the outer
                  variable
                </li>
                <li>
                  <strong>outerFunction</strong> returns the inner function
                </li>
                <li>
                  Even after <strong>outerFunction</strong> completes,{" "}
                  <strong>innerFunction</strong> still "remembers" outerVariable
                </li>
                <li>This "memory" is the closure!</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">
              Visual Representation
            </h3>

            <div
              className={`rounded-xl p-6 mb-6 border ${
                theme === "light"
                  ? "bg-white border-gray-300"
                  : "bg-gray-800 border-gray-700"
              }`}
            >
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg border-blue-500 ${
                    theme === "light" ? "bg-blue-50" : "bg-blue-900/20"
                  }`}
                >
                  <div className="font-semibold mb-2">
                    {" "}
                    Outer Function Scope
                  </div>
                  <div className=" text-sm">
                    <div>• outerVariable = "I'm from outer scope!"</div>
                    <div className={`mt-3  border-green-500 `}>
                      <div className="font-semibold mb-2">
                        {" "}
                        Inner Function (Closure)
                      </div>
                      <div className=" text-sm">
                        • Can access: outerVariable ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="examples" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Practical Examples
            </h2>

            <h3 className="text-2xl font-semibold mb-4">1. Counter Function</h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <MdCheck className="text-green-500" size={24} />
                <span className="font-semibold text-green-500">
                  Private Variable Pattern
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`
                  function createCounter() {
                    let count = 0; // Private variable!
                    
                    return {
                      increment: function() {
                        count++;
                        return count;
                      },
                      decrement: function() {
                        count--;
                        return count;
                      },
                      getCount: function() {
                        return count;
                      }
                    };
                  }

                  const counter = createCounter();
                  console.log(counter.increment()); // 1
                  console.log(counter.increment()); // 2
                  console.log(counter.decrement()); // 1
                  console.log(counter.getCount());  // 1

                  // count is NOT accessible from outside!
                  console.log(counter.count); // undefined`}
                </code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">
              2. Function Factory
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
                  function createMultiplier(multiplier) {
                    return function(number) {
                      return number * multiplier;
                    };
                  }

                  const double = createMultiplier(2);
                  const triple = createMultiplier(3);
                  const quadruple = createMultiplier(4);

                  console.log(double(5));     // 10
                  console.log(triple(5));     // 15
                  console.log(quadruple(5));  // 20

                  // Each function "remembers" its own multiplier!`
                  }</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">
              3. Event Handlers with Closures
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
                  function setupButtons() {
                    const buttons = ['Button 1', 'Button 2', 'Button 3'];
                    
                    buttons.forEach((buttonText, index) => {
                      const button = document.createElement('button');
                      button.textContent = buttonText;
                      
                      // Closure captures the index for each button
                      button.addEventListener('click', function() {
                        console.log(\`Clicked \${buttonText} at index \${index}\`);
                      });
                      
                      document.body.appendChild(button);
                    });
                  }

                  setupButtons();
                  // Each button remembers its own buttonText and index!`}
                </code>
              </pre>
            </div>

            <div
              className={`p-6 rounded-xl border ${
                theme === "light"
                  ? "bg-orange-50 border-orange-300"
                  : "bg-orange-900/20 border-orange-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <MdWarning className="text-orange-500" size={24} />
                <span className="font-semibold">
                  Common Pitfall: Loop Closures
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto mb-4 ${
                  theme === "light"
                    ? "bg-neutral-900 text-red-400"
                    : "bg-neutral-950 text-red-300"
                }`}
              >
                <code>{`// WRONG - All buttons show 3
                  for (var i = 0; i < 3; i++) {
                    buttons[i].onclick = function() {
                      console.log(i); // Always 3!
                    };
                  }`}</code>
                                </pre>
                                <pre
                                  className={`p-4 rounded-lg overflow-x-auto ${
                                    theme === "light"
                                      ? "bg-neutral-900 text-green-400"
                                      : "bg-neutral-950 text-green-300"
                                  }`}
                                >
                                  <code>{`// CORRECT - Use let (block scope)
                  for (let i = 0; i < 3; i++) {
                    buttons[i].onclick = function() {
                      console.log(i); // 0, 1, 2 correctly
                    };
                  }

                  // CORRECT - Create closure with IIFE
                  for (var i = 0; i < 3; i++) {
                    (function(index) {
                      buttons[index].onclick = function() {
                        console.log(index); // 0, 1, 2 correctly
                      };
                    })(i);
                  }`}
                </code>
              </pre>
            </div>
          </section>

          <section id="use-cases" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Common Use Cases
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: <FaLock />,
                  title: "Data Privacy/Encapsulation",
                  text: "Create private variables that can only be accessed through specific functions",
                },
                {
                  icon: <AiOutlineFunction />,
                  title: "Function Factories",
                  text: "Generate customized functions based on parameters",
                },
                {
                  icon: <BiCodeBlock />,
                  title: "Event Handlers",
                  text: "Maintain state in event listeners without global variables",
                },
                {
                  icon: <MdLayers />,
                  title: "Callbacks & Async",
                  text: "Preserve context when passing functions as callbacks",
                },
                {
                  icon: <FaMemory />,
                  title: "Memoization",
                  text: "Cache function results by remembering previous computations",
                },
                {
                  icon: <GiOpenedFoodCan />,
                  title: "Module Pattern",
                  text: "Create modules with public and private methods",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-5 border rounded-xl transition ${
                    theme === "light"
                      ? "border-gray-400 hover:border-gray-700 hover:bg-gray-100"
                      : "border-gray-500 hover:border-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <span className="text-3xl flex-shrink-0 text-purple-500">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p
                      className={
                        theme === "light"
                          ? "text-neutral-600"
                          : "text-neutral-400"
                      }
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`mt-8 p-6 rounded-xl border ${
                theme === "light"
                  ? "bg-green-50 border-green-300"
                  : "bg-green-900/20 border-green-700"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MdCheck className="text-green-500" size={28} />
                Key Takeaways
              </h3>
              <ul className="space-y-2 ml-8 list-disc">
                <li>
                  Closures allow functions to access variables from their outer
                  scope
                </li>
                <li>
                  They enable data privacy and encapsulation in JavaScript
                </li>
                <li>Every function in JavaScript creates a closure</li>
                <li>
                  Be mindful of memory - closures keep outer variables in memory
                </li>
                <li>
                  Use{" "}
                  <code
                    className={`px-2 py-1 rounded ${
                      theme === "light" ? "bg-gray-200" : "bg-gray-700"
                    }`}
                  >
                    let
                  </code>{" "}
                  instead of{" "}
                  <code
                    className={`px-2 py-1 rounded ${
                      theme === "light" ? "bg-gray-200" : "bg-gray-700"
                    }`}
                  >
                    var
                  </code>{" "}
                  in loops to avoid common closure pitfalls
                </li>
              </ul>
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
                onClick={() => handleNavigate("JsAsyncAwait")}
                className={`text-left p-6 rounded-xl transition border ${
                  theme === "light"
                    ? "bg-white border-gray-300 hover:border-purple-500 hover:shadow-lg"
                    : "bg-gray-800 border-gray-700 hover:border-purple-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-purple-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Async/Await in JavaScript
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "light"
                          ? "text-neutral-600"
                          : "text-neutral-400"
                      }`}
                    >
                      Master async programming patterns in JavaScript
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleNavigate("RunnableVsThread")}
                className={`text-left p-6 rounded-xl transition border ${
                  theme === "light"
                    ? "bg-white border-gray-300 hover:border-blue-500 hover:shadow-lg"
                    : "bg-gray-800 border-gray-700 hover:border-blue-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-3">
                  <FaCode className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Runnable vs Thread in Java
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "light"
                          ? "text-neutral-600"
                          : "text-neutral-400"
                      }`}
                    >
                      Understand threading in other languages
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

export default JsClosures;
