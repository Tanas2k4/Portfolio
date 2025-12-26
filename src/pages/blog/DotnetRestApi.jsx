import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import { TbApi, TbRoute, TbDatabase, TbShieldCheck } from "react-icons/tb";
import { FaCode, FaCheckCircle, FaRegLightbulb } from "react-icons/fa";
import { MdOutlineSpeed, MdSecurity, MdArchitecture } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import { HiDocumentText } from "react-icons/hi2";
import { IoServer } from "react-icons/io5";

const DotnetRestApi = () => {
  const { theme, t } = useApp();
  const navigate = useApp().navigate;
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "introduction", title: "Introduction to REST APIs" },
    { id: "setup", title: "Setting Up Your Project" },
    { id: "controllers", title: "Creating Controllers" },
    { id: "best-practices", title: "Best Practices" }
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

        {/* Divider */}
        <div className={`hidden lg:block w-px ${
          theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'
        }`}></div>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl">
          
          {/* Header */}
          <header className="mb-12">
            <div className="pg-5px mb-6">
              <span className={`mt-10 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
                theme === 'light' 
                  ? 'bg-purple-500/20 text-purple-700' 
                  : 'bg-purple-400/30 text-purple-200'
              }`}>
                .NET • Backend • 2024
              </span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight">
              Building REST APIs with .NET
            </h1>

            <p className={`text-xl leading-relaxed ${
              theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              Designing clean and maintainable RESTful APIs in ASP.NET Core
            </p>
          </header>

          {/* Intro Section */}
          <section className={`mb-12 rounded-2xl p-8 border ${
            theme === 'light'
              ? ' border-gray-400'
              : ' border-gray-600'
          }`}>
            <p className="text-lg leading-relaxed">
              ASP.NET Core provides a powerful and flexible framework for building
              modern REST APIs. With minimal boilerplate code and excellent performance,
              it's an ideal choice for backend developers looking to create scalable
              web services.
            </p>
          </section>

          {/* Introduction */}
          <section id="introduction" className="mb-12 scroll-mt-24">
            <h2 className={`mb-6 text-3xl font-bold ${
              theme === 'light' ? 'text-neutral-900' : 'text-neutral-100'
            }`}>
              Introduction to REST APIs
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              REST (Representational State Transfer) is an architectural style that uses
              HTTP methods to perform operations on resources. ASP.NET Core makes it simple
              to create RESTful services with built-in routing, model binding, and validation.
            </p>

            <div className={`grid gap-4 rounded-xl p-6`}>
              <div className={`flex items-start gap-4 p-5 rounded-lg ${
                theme === 'light' ? 'bg-white/70' : 'bg-gray-800'
              }`}>
                <span className="text-2xl">
                  <TbApi size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">RESTful Design</h3>
                  <p className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                    Use HTTP verbs (GET, POST, PUT, DELETE) to represent actions
                  </p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 p-5 rounded-lg ${
                theme === 'light' ? 'bg-white/70' : 'bg-gray-800'
              }`}>
                <span className="text-2xl">
                  <TbRoute size={50}/>
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Resource-Based URLs</h3>
                  <p className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                    Structure endpoints around resources like /api/products
                  </p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 p-5 rounded-lg ${
                theme === 'light' ? 'bg-white/70' : 'bg-gray-800'
              }`}>
                <span className="text-2xl">
                  <IoServer size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Stateless Communication</h3>
                  <p className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
                    Each request contains all information needed to process it
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Setup Section */}
          <section id="setup" className="mb-12 scroll-mt-24">
            <h2 className={`mb-6 text-3xl font-bold ${
              theme === 'light' ? 'text-neutral-900' : 'text-neutral-100'
            }`}>
              Setting Up Your Project
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Getting started with ASP.NET Core Web API is straightforward. You can create
              a new project using the .NET CLI or Visual Studio templates.
            </p>

            <div className={`rounded-xl p-6 mb-6 ${
              theme === 'light'
                ? 'bg-neutral-100 border border-gray-300'
                : 'bg-neutral-900 border border-gray-700'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <FaCode className="text-blue-500" size={24} />
                <span className="font-semibold">Creating a new project</span>
              </div>
              <pre className={`p-4 rounded-lg overflow-x-auto ${
                theme === 'light'
                  ? 'bg-neutral-900 text-green-400'
                  : 'bg-neutral-950 text-green-300'
              }`}>
                <code>{`dotnet new webapi -n MyApiProject
cd MyApiProject
dotnet run`}</code>
              </pre>
            </div>

            <div className={`rounded-xl p-6 ${
              theme === 'light'
                ? 'bg-neutral-100 border border-gray-300'
                : 'bg-neutral-900 border border-gray-700'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <FaCode className="text-blue-500" size={24} />
                <span className="font-semibold">Program.cs configuration</span>
              </div>
              <pre className={`p-4 rounded-lg overflow-x-auto ${
                theme === 'light'
                  ? 'bg-neutral-900 text-green-400'
                  : 'bg-neutral-950 text-green-300'
              }`}>
                <code>{`var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();`}</code>
              </pre>
            </div>
          </section>

          {/* Controllers Section */}
          <section id="controllers" className="mb-12 scroll-mt-24">
            <h2 className={`mb-6 text-3xl font-bold ${
              theme === 'light' ? 'text-neutral-900' : 'text-neutral-100'
            }`}>
              Creating Controllers
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Controllers handle incoming HTTP requests and return responses. In ASP.NET Core,
              you typically inherit from <code className={`px-2 py-1 rounded ${
                theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'
              }`}>ControllerBase</code> for API controllers.
            </p>

            <div className={`rounded-xl p-6 mb-6 ${
              theme === 'light'
                ? 'bg-neutral-100 border border-gray-300'
                : 'bg-neutral-900 border border-gray-700'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <FaCode className="text-blue-500" size={24} />
                <span className="font-semibold">Sample Controller</span>
              </div>
              <pre className={`p-4 rounded-lg overflow-x-auto ${
                theme === 'light'
                  ? 'bg-neutral-900 text-green-400'
                  : 'bg-neutral-950 text-green-300'
              }`}>
                <code>{`[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<Product>> GetAll()
    {
        return Ok(products);
    }

    [HttpGet("{id}")]
    public ActionResult<Product> GetById(int id)
    {
        var product = products.FirstOrDefault(p => p.Id == id);
        if (product == null)
            return NotFound();
        
        return Ok(product);
    }

    [HttpPost]
    public ActionResult<Product> Create(Product product)
    {
        products.Add(product);
        return CreatedAtAction(nameof(GetById), 
            new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Product product)
    {
        if (id != product.Id)
            return BadRequest();
        
        // Update logic here
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        // Delete logic here
        return NoContent();
    }
}`}</code>
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className={`p-6 rounded-xl border ${
                theme === 'light'
                  ? 'bg-white/70 border-gray-300 hover:border-gray-500'
                  : 'bg-neutral-900/70 border-gray-600 hover:border-gray-300'
              } transition-colors`}>
                <div className="text-3xl mb-3 text-green-500"><TbDatabase size={30}/></div>
                <h3 className="font-semibold mb-2">Entity Framework Core</h3>
                <p className={`text-sm ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}`}>
                  Use EF Core for database operations with LINQ queries
                </p>
              </div>

              <div className={`p-6 rounded-xl border ${
                theme === 'light'
                  ? 'bg-white/70 border-gray-300 hover:border-gray-500'
                  : 'bg-neutral-900/70 border-gray-600 hover:border-gray-300'
              } transition-colors`}>
                <div className="text-3xl mb-3 text-blue-500"><HiDocumentText size={30} /></div>
                <h3 className="font-semibold mb-2">Swagger/OpenAPI</h3>
                <p className={`text-sm ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}`}>
                  Auto-generate API documentation for easy testing
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="mb-12 scroll-mt-24">
            <h2 className={`mb-6 text-3xl font-bold ${
              theme === 'light' ? 'text-neutral-900' : 'text-neutral-100'
            }`}>
              Best Practices
            </h2>

            <div className="space-y-4">
              {[
                { icon: <MdArchitecture size={30}/>, text: 'Use DTOs (Data Transfer Objects) to separate API models from domain models' },
                { icon: <FaCheckCircle size={30}/>, text: 'Implement proper input validation using Data Annotations or FluentValidation' },
                { icon: <MdSecurity size={30}/>, text: 'Add authentication and authorization using JWT or Identity' },
                { icon: <BiTestTube size={30}/>, text: 'Write unit tests for controllers and integration tests for APIs' },
                { icon: <MdOutlineSpeed size={30}/>, text: 'Use async/await for I/O operations to improve scalability' },
                { icon: <FaRegLightbulb size={30}/>, text: 'Follow REST conventions and use proper HTTP status codes' }
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

          {/* Footer */}
          <footer className={`pt-8 border-t text-center ${
            theme === 'light'
              ? 'border-gray-400 text-neutral-500'
              : 'border-gray-500 text-neutral-400'
          }`}>
            <p className="text-sm">
              Written for developers building modern REST APIs with ASP.NET Core
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

export default DotnetRestApi;