import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import { FaCode, FaLock, FaExclamationTriangle } from "react-icons/fa";
import { MdBlock, MdWarning, MdCheckCircle } from "react-icons/md";
import { GiDeadEye, GiBreakingChain } from "react-icons/gi";
import { BiError } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbLockCancel } from "react-icons/tb";

const JavaDeadlock = () => {
  const { theme, t } = useApp();
  const navigate = useApp().navigate;
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "what-is", title: "What is Deadlock?" },
    { id: "conditions", title: "Deadlock Conditions" },
    { id: "example", title: "Deadlock Example" },
    { id: "prevention", title: "Prevention & Detection" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
        behavior: "smooth"
      });
    }
  };

  return (
    <article className={`min-h-screen py-20 px-4 ${
      theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'
    }`}>
      <div className="mx-auto max-w-7xl flex gap-8">
        
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
                        ? theme === 'light'
                          ? ' text-gray-700 font-bold text-lg'
                          : ' text-gray-100 font-bold text-lg'
                        : theme === 'light'
                        ? 'text-neutral-600 text-sm'
                        : 'text-neutral-400 text-sm'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        <div className={`hidden lg:block w-px ${
          theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'
        }`}></div>

        <div className="flex-1 max-w-4xl">
          
          <header className="mb-12">
            <div className="pg-5px mb-6">
              <span className={`mt-10 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
                theme === 'light' 
                  ? 'bg-red-500/20 text-red-700' 
                  : 'bg-red-400/30 text-red-200'
              }`}>
                Java • Concurrency • 2024
              </span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight">
              Understanding Deadlock in Java
            </h1>

            <p className={`text-xl leading-relaxed ${
              theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              What deadlocks are, why they happen, and how to prevent them in Java applications
            </p>
          </header>

          <section className={`mb-12 rounded-2xl p-8 border ${
            theme === 'light'
              ? 'bg-red-50 border-red-300'
              : 'bg-red-900/20 border-red-600'
          }`}>
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-red-500 text-3xl flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                Deadlock is one of the most critical issues in concurrent programming where
                two or more threads are blocked forever, waiting for each other to release
                resources. Understanding and preventing deadlocks is essential for building
                robust multi-threaded applications.
              </p>
            </div>
          </section>

          <section id="what-is" className="mb-12 scroll-mt-24">
            <h2 className={`mb-6 text-3xl font-bold ${
              theme === 'light' ? 'text-neutral-900' : 'text-neutral-100'
            }`}>
              What is Deadlock?
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              A deadlock occurs when multiple threads are waiting for resources held by
              each other, creating a circular dependency. No thread can proceed, and the
              application hangs indefinitely.
            </p>

            <div className={`p-6 rounded-xl mb-6 ${
              theme === 'light' ? 'bg-neutral-100' : 'bg-neutral-900'
            }`}>
              <h3 className="text-xl font-semibold mb-4">Real-World Analogy</h3>
              <p className={`leading-relaxed ${theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'}`}>
                Imagine two people trying to cross a narrow bridge from opposite sides. 
                Person A needs to cross to the other side where Person B is standing, 
                and Person B needs to cross to where Person A is standing. If both step 
                onto the bridge at the same time and refuse to step back, neither can 
                proceed - this is a deadlock!
              </p>
            </div>

            <div className={`grid md:grid-cols-2 gap-4`}>
              <div className={`flex items-start gap-4 p-5 rounded-lg ${
                theme === 'light' ? 'bg-white/70 border border-gray-300' : 'bg-gray-800 border border-gray-700'
              }`}>
                <span className="text-2xl text-red-500">
                  <GiDeadEye size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Circular Wait</h3>
                  <p className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                    Thread A waits for Thread B, Thread B waits for Thread A
                  </p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 p-5 rounded-lg ${
                theme === 'light' ? 'bg-white/70 border border-gray-300' : 'bg-gray-800 border border-gray-700'
              }`}>
                <span className="text-2xl text-orange-500">
                  <MdBlock size={50}/>
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Blocked Forever</h3>
                  <p className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                    Threads remain blocked indefinitely with no progress
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="conditions" className="mb-12 scroll-mt-24">
            <h2 className={`mb-6 text-3xl font-bold ${
              theme === 'light' ? 'text-neutral-900' : 'text-neutral-100'
            }`}>
              Four Necessary Conditions for Deadlock
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              For a deadlock to occur, all four of these conditions must be present
              simultaneously. Breaking any one of them prevents deadlock.
            </p>

            <div className="space-y-4">
              <div className={`p-6 rounded-xl border ${
                theme === 'light' 
                  ? 'bg-white border-gray-300' 
                  : 'bg-neutral-900 border-gray-600'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <FaLock className="text-blue-500 text-2xl" />
                  <h3 className="text-xl font-semibold">1. Mutual Exclusion</h3>
                </div>
                <p className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                  At least one resource must be held in a non-shareable mode. Only one 
                  thread can use the resource at any given time.
                </p>
              </div>

              <div className={`p-6 rounded-xl border ${
                theme === 'light' 
                  ? 'bg-white border-gray-300' 
                  : 'bg-neutral-900 border-gray-600'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <AiOutlineClockCircle className="text-green-500 text-2xl" />
                  <h3 className="text-xl font-semibold">2. Hold and Wait</h3>
                </div>
                <p className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                  A thread holding at least one resource is waiting to acquire additional 
                  resources held by other threads.
                </p>
              </div>

              <div className={`p-6 rounded-xl border ${
                theme === 'light' 
                  ? 'bg-white border-gray-300' 
                  : 'bg-neutral-900 border-gray-600'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <TbLockCancel className="text-purple-500 text-2xl" />
                  <h3 className="text-xl font-semibold">3. No Preemption</h3>
                </div>
                <p className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                  Resources cannot be forcibly taken from threads. A thread must 
                  voluntarily release a resource.
                </p>
              </div>

              <div className={`p-6 rounded-xl border ${
                theme === 'light' 
                  ? 'bg-white border-gray-300' 
                  : 'bg-neutral-900 border-gray-600'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <GiBreakingChain className="text-red-500 text-2xl" />
                  <h3 className="text-xl font-semibold">4. Circular Wait</h3>
                </div>
                <p className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                  A set of threads exists where each thread is waiting for a resource 
                  held by the next thread in the chain, forming a circle.
                </p>
              </div>
            </div>
          </section>

          <section id="example" className="mb-12 scroll-mt-24">
            <h2 className={`mb-6 text-3xl font-bold ${
              theme === 'light' ? 'text-neutral-900' : 'text-neutral-100'
            }`}>
              Deadlock Example in Java
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Let's look at a classic example where two threads try to acquire locks
              in different orders, resulting in a deadlock.
            </p>

            <div className={`rounded-xl p-6 mb-6 ${
              theme === 'light'
                ? 'bg-neutral-100 border border-gray-300'
                : 'bg-neutral-900 border border-gray-700'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <BiError className="text-red-500" size={24} />
                <span className="font-semibold text-red-500">Deadlock Code (Don't use!)</span>
              </div>
              <pre className={`p-4 rounded-lg overflow-x-auto ${
                theme === 'light'
                  ? 'bg-neutral-900 text-green-400'
                  : 'bg-neutral-950 text-green-300'
              }`}>
                <code>{`public class DeadlockExample {
    private static final Object lock1 = new Object();
    private static final Object lock2 = new Object();

    public static void main(String[] args) {
        Thread thread1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread 1: Holding lock1...");
                
                try { Thread.sleep(100); } 
                catch (InterruptedException e) {}
                
                System.out.println("Thread 1: Waiting for lock2...");
                synchronized (lock2) {
                    System.out.println("Thread 1: Acquired lock2");
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread 2: Holding lock2...");
                
                try { Thread.sleep(100); } 
                catch (InterruptedException e) {}
                
                System.out.println("Thread 2: Waiting for lock1...");
                synchronized (lock1) {
                    System.out.println("Thread 2: Acquired lock1");
                }
            }
        });

        thread1.start();
        thread2.start();
        
        // Both threads will be stuck in deadlock!
    }
}`}</code>
              </pre>
            </div>

            <div className={`p-6 rounded-xl border ${
              theme === 'light'
                ? 'bg-orange-50 border-orange-300'
                : 'bg-orange-900/20 border-orange-700'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <MdWarning className="text-orange-500" size={24} />
                <span className="font-semibold">What Happens?</span>
              </div>
              <ol className="space-y-2 ml-6 list-decimal">
                <li>Thread 1 acquires lock1 and holds it</li>
                <li>Thread 2 acquires lock2 and holds it</li>
                <li>Thread 1 tries to acquire lock2 (held by Thread 2) - BLOCKED</li>
                <li>Thread 2 tries to acquire lock1 (held by Thread 1) - BLOCKED</li>
                <li>Both threads wait forever - DEADLOCK!</li>
              </ol>
            </div>
          </section>

          <section id="prevention" className="mb-12 scroll-mt-24">
            <h2 className={`mb-6 text-3xl font-bold ${
              theme === 'light' ? 'text-neutral-900' : 'text-neutral-100'
            }`}>
              Prevention & Detection
            </h2>

            <h3 className="text-2xl font-semibold mb-4">1. Lock Ordering</h3>
            
            <div className={`rounded-xl p-6 mb-6 ${
              theme === 'light'
                ? 'bg-neutral-100 border border-gray-300'
                : 'bg-neutral-900 border border-gray-700'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <MdCheckCircle className="text-green-500" size={24} />
                <span className="font-semibold text-green-500">Fixed Code - Always acquire locks in the same order</span>
              </div>
              <pre className={`p-4 rounded-lg overflow-x-auto ${
                theme === 'light'
                  ? 'bg-neutral-900 text-green-400'
                  : 'bg-neutral-950 text-green-300'
              }`}>
                <code>{`public class DeadlockFixed {
    private static final Object lock1 = new Object();
    private static final Object lock2 = new Object();

    public static void main(String[] args) {
        Thread thread1 = new Thread(() -> {
            synchronized (lock1) {  // Same order
                synchronized (lock2) {
                    System.out.println("Thread 1: Completed");
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            synchronized (lock1) {  // Same order!
                synchronized (lock2) {
                    System.out.println("Thread 2: Completed");
                }
            }
        });

        thread1.start();
        thread2.start();
    }
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4">2. Using tryLock with Timeout</h3>
            
            <div className={`rounded-xl p-6 mb-6 ${
              theme === 'light'
                ? 'bg-neutral-100 border border-gray-300'
                : 'bg-neutral-900 border border-gray-700'
            }`}>
              <pre className={`p-4 rounded-lg overflow-x-auto ${
                theme === 'light'
                  ? 'bg-neutral-900 text-green-400'
                  : 'bg-neutral-950 text-green-300'
              }`}>
                <code>{`import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.TimeUnit;

public class TryLockExample {
    private static Lock lock1 = new ReentrantLock();
    private static Lock lock2 = new ReentrantLock();

    public static void performTask() {
        try {
            if (lock1.tryLock(1000, TimeUnit.MILLISECONDS)) {
                try {
                    if (lock2.tryLock(1000, TimeUnit.MILLISECONDS)) {
                        try {
                            // Critical section
                        } finally {
                            lock2.unlock();
                        }
                    }
                } finally {
                    lock1.unlock();
                }
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Best Practices</h3>
            
            <div className="space-y-4">
              {[
                { icon: <FaLock size={30}/>, text: 'Always acquire locks in a consistent global order' },
                { icon: <AiOutlineClockCircle size={30}/>, text: 'Use lock timeout mechanisms (tryLock) instead of indefinite waiting' },
                { icon: <MdCheckCircle size={30}/>, text: 'Minimize the scope of synchronized blocks to reduce lock holding time' },
                { icon: <GiBreakingChain size={30}/>, text: 'Avoid nested locks when possible - use higher-level concurrency utilities' },
                { icon: <BiError size={30}/>, text: 'Use thread dumps and profilers to detect and analyze deadlocks' },
                { icon: <MdWarning size={30}/>, text: 'Test concurrent code thoroughly with stress tests and race condition scenarios' }
              ].map((item, index) => (
                <div key={index} className={`flex items-start gap-4 p-4 border rounded-xl ${
                  theme === 'light' ? 'border-gray-400 hover:border-gray-700 hover:bg-gray-300' : 'border-gray-500 hover:border-gray-300 hover:bg-gray-800'
                }`}>
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p className="text-lg pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className={`pt-8 border-t text-center ${
            theme === 'light'
              ? 'border-gray-400 text-neutral-500'
              : 'border-gray-500 text-neutral-400'
          }`}>
            <p className="text-sm">
              Written for Java developers working with concurrent applications
            </p>
            <button
              onClick={() => handleNavigate("/blogs")}
              className={`
                group
                mt-13
                px-8 py-4
                rounded-full
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
          </footer>
        </div>
      </div>
    </article>
  );
}

export default JavaDeadlock;