import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import { FaCode, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { MdCompare, MdOutlineSpeed, MdMemory } from "react-icons/md";
import { BiGitCompare } from "react-icons/bi";
import { GiChoice } from "react-icons/gi";
import { IoWarning } from "react-icons/io5";
import { PiThreadsLogoBold } from "react-icons/pi";
import { FaLock, FaShieldAlt } from "react-icons/fa";

const RunnableVsThread = () => {
  const { theme, t } = useApp();
  const navigate = useApp().navigate;
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "thread-class", title: "Using Thread Class" },
    { id: "runnable-interface", title: "Using Runnable Interface" },
    { id: "comparison", title: "Comparison & When to Use" },
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
                    ? "bg-orange-500/20 text-orange-700"
                    : "bg-orange-400/30 text-orange-200"
                }`}
              >
                Java • Multithreading • 2025
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight">
              Runnable vs Thread in Java
            </h1>

            <p
              className={`text-xl leading-relaxed ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              Choosing the right way to create threads using Runnable and Thread
            </p>
          </header>

          <section
            className={`mb-12 rounded-2xl p-8 border ${
              theme === "light" ? " border-gray-400" : " border-gray-600"
            }`}
          >
            <p className="text-lg leading-relaxed">
              Java provides two primary ways to create threads: extending the
              Thread class or implementing the Runnable interface. Understanding
              the differences between these approaches is crucial for writing
              efficient concurrent applications.
            </p>
          </section>

          <section id="introduction" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Introduction to Thread Creation
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Both approaches allow you to execute code concurrently, but they
              differ in flexibility, design principles, and use cases. Let's
              explore each method in detail.
            </p>

            <div className={`grid md:grid-cols-2 gap-4 rounded-xl p-6`}>
              <div
                className={`flex items-start gap-4 p-5 rounded-lg ${
                  theme === "light" ? "bg-white/70" : "bg-gray-800"
                }`}
              >
                <span className="text-2xl text-blue-500">
                  <PiThreadsLogoBold size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Thread Class</h3>
                  <p
                    className={
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }
                  >
                    Extend Thread and override run() method
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-4 p-5 rounded-lg ${
                  theme === "light" ? "bg-white/70" : "bg-gray-800"
                }`}
              >
                <span className="text-2xl text-green-500">
                  <TbBrandThreads size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Runnable Interface</h3>
                  <p
                    className={
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }
                  >
                    Implement Runnable and define run() method
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="thread-class" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Using Thread Class
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              The Thread class approach involves creating a subclass that
              extends Thread and overriding its run() method.
            </p>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <FaCode className="text-blue-500" size={24} />
                <span className="font-semibold">Thread Class Example</span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() 
                + " - Count: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        MyThread thread2 = new MyThread();
        
        thread1.start();
        thread2.start();
    }
}`}</code>
              </pre>
            </div>

            <div
              className={`p-6 rounded-xl border ${
                theme === "light"
                  ? "bg-red-50 border-red-300"
                  : "bg-red-900/20 border-red-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <FaTimesCircle className="text-red-500" size={24} />
                <span className="font-semibold">Limitations</span>
              </div>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Cannot extend another class (Java single inheritance)</li>
                <li>Tight coupling with Thread class</li>
                <li>Less flexible for composition</li>
              </ul>
            </div>
          </section>

          <section id="runnable-interface" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Using Runnable Interface
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Implementing Runnable is generally preferred because it separates
              the task from the thread execution mechanism, following better
              object-oriented design.
            </p>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <FaCode className="text-green-500" size={24} />
                <span className="font-semibold">
                  Runnable Interface Example
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() 
                + " - Count: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        MyRunnable task = new MyRunnable();
        
        Thread thread1 = new Thread(task);
        Thread thread2 = new Thread(task);
        
        thread1.start();
        thread2.start();
    }
}`}</code>
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
                <FaCode className="text-purple-500" size={24} />
                <span className="font-semibold">
                  Lambda Expression (Java 8+)
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`// Using lambda expression
Thread thread = new Thread(() -> {
    for (int i = 0; i < 5; i++) {
        System.out.println("Count: " + i);
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
});

thread.start();

// Using method reference
Thread thread2 = new Thread(MyClass::myMethod);
thread2.start();`}</code>
              </pre>
            </div>

            <div
              className={`p-6 rounded-xl border ${
                theme === "light"
                  ? "bg-green-50 border-green-300"
                  : "bg-green-900/20 border-green-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <FaCheckCircle className="text-green-500" size={24} />
                <span className="font-semibold">Advantages</span>
              </div>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Can extend other classes while implementing Runnable</li>
                <li>Better separation of concerns</li>
                <li>Can be used with thread pools and executors</li>
                <li>Supports functional programming with lambdas</li>
              </ul>
            </div>
          </section>

          <section id="comparison" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Comparison & When to Use
            </h2>

            <div
              className={`mb-8 overflow-x-auto rounded-xl border ${
                theme === "light" ? "border-gray-300" : "border-gray-700"
              }`}
            >
              <table className="w-full">
                <thead
                  className={
                    theme === "light" ? "bg-neutral-200" : "bg-neutral-800"
                  }
                >
                  <tr>
                    <th className="p-4 text-left">Aspect</th>
                    <th className="p-4 text-left">Thread Class</th>
                    <th className="p-4 text-left">Runnable Interface</th>
                  </tr>
                </thead>
                <tbody
                  className={theme === "light" ? "bg-white" : "bg-neutral-900"}
                >
                  <tr
                    className={`border-t ${
                      theme === "light" ? "border-gray-200" : "border-gray-700"
                    }`}
                  >
                    <td className="p-4 font-semibold">Inheritance</td>
                    <td className="p-4">Cannot extend other classes</td>
                    <td className="p-4 text-green-600 font-semibold">
                      Can extend other classes
                    </td>
                  </tr>
                  <tr
                    className={`border-t ${
                      theme === "light" ? "border-gray-200" : "border-gray-700"
                    }`}
                  >
                    <td className="p-4 font-semibold">Reusability</td>
                    <td className="p-4">Less reusable</td>
                    <td className="p-4 text-green-600 font-semibold">
                      Highly reusable
                    </td>
                  </tr>
                  <tr
                    className={`border-t ${
                      theme === "light" ? "border-gray-200" : "border-gray-700"
                    }`}
                  >
                    <td className="p-4 font-semibold">Design</td>
                    <td className="p-4">Tight coupling</td>
                    <td className="p-4 text-green-600 font-semibold">
                      Loose coupling
                    </td>
                  </tr>
                  <tr
                    className={`border-t ${
                      theme === "light" ? "border-gray-200" : "border-gray-700"
                    }`}
                  >
                    <td className="p-4 font-semibold">Thread Pool</td>
                    <td className="p-4">Not suitable</td>
                    <td className="p-4 text-green-600 font-semibold">
                      Perfect for ExecutorService
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Best Practices</h3>

            <div className="space-y-4">
              {[
                {
                  icon: <GiChoice size={30} />,
                  text: "Prefer Runnable over Thread for better design and flexibility",
                },
                {
                  icon: <MdOutlineSpeed size={30} />,
                  text: "Use ExecutorService with Runnable for thread pool management",
                },
                {
                  icon: <BiGitCompare size={30} />,
                  text: "Use lambda expressions for simple, one-time tasks",
                },
                {
                  icon: <MdMemory size={30} />,
                  text: "Share Runnable instances to reduce memory overhead",
                },
                {
                  icon: <IoWarning size={30} />,
                  text: "Never call run() directly - always use start() to create a new thread",
                },
                {
                  icon: <MdCompare size={30} />,
                  text: "Consider using higher-level concurrency utilities when possible",
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
                onClick={() => handleNavigate("JavaDeadlock")}
                className={`text-left p-6 rounded-xl transition border ${
                  theme === "light"
                    ? "bg-white border-gray-300 hover:border-red-500 hover:shadow-lg"
                    : "bg-gray-800 border-gray-700 hover:border-red-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-red-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Java Deadlock Detection & Prevention
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "light"
                          ? "text-neutral-600"
                          : "text-neutral-400"
                      }`}
                    >
                      Master deadlock prevention techniques in multithreading
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
                  <FaLock className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
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
                      Create modern REST APIs with ASP.NET Core
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

export default RunnableVsThread;
