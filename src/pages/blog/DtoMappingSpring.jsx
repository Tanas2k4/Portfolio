import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import {
  TbArrowsExchange,
  TbCodeDots,
  TbSchema,
  TbRocket,
  TbDatabase,
  TbApi,
} from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { BiTransfer } from "react-icons/bi";
import { FaKey, FaShieldAlt } from "react-icons/fa";

const DtoMappingSpring = () => {
  const { theme, t } = useApp();
  const navigate = useApp().navigate;
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "what-is-dto", title: "What is DTO?" },
    { id: "why-mapping", title: "Why Use DTO Mapping?" },
    { id: "mapstruct", title: "Using MapStruct" },
    { id: "modelmapper", title: "Using ModelMapper" },
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
        <div className="flex-1 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <div className="pg-5px mb-6">
              <span
                className={`mt-10 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
                  theme === "light"
                    ? "bg-blue-500/20 text-blue-700"
                    : "bg-blue-400/30 text-blue-200"
                }`}
              >
                Java • Spring Boot • 2024
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight">
              DTO Mapping in Spring Boot
            </h1>

            <p
              className={`text-xl leading-relaxed ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              Best practices for mapping Entity to DTO using MapStruct and
              ModelMapper
            </p>
          </header>

          {/* Intro Section */}
          <section
            className={`mb-12 rounded-2xl p-8 border ${
              theme === "light" ? " border-gray-400" : " border-gray-600"
            }`}
          >
            <p className="text-lg leading-relaxed">
              Data Transfer Objects (DTOs) are essential for building clean APIs
              in Spring Boot. They help separate your domain model from the API
              layer, providing better control over what data is exposed and
              reducing coupling between layers.
            </p>
          </section>

          {/* What is DTO */}
          <section id="what-is-dto" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              What is DTO?
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              A{" "}
              <strong
                className={
                  theme === "light" ? "text-blue-700" : "text-blue-400"
                }
              >
                Data Transfer Object
              </strong>{" "}
              is a simple object that carries data between processes. In Spring
              Boot applications, DTOs are used to transfer data between the
              service layer and the presentation layer.
            </p>

            <div className={`grid gap-4 rounded-xl p-6 `}>
              <div
                className={`flex items-start gap-4 p-5 rounded-lg ${
                  theme === "light" ? "bg-white/70" : "bg-gray-800"
                }`}
              >
                <span className="text-2xl">
                  <TbDatabase size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Entity</h3>
                  <p
                    className={
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }
                  >
                    Represents database tables with all fields and relationships
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-4 p-5 rounded-lg ${
                  theme === "light" ? "bg-white/70" : "bg-gray-800"
                }`}
              >
                <span className="text-2xl">
                  <BiTransfer size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">DTO</h3>
                  <p
                    className={
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }
                  >
                    Contains only the data needed for specific API operations
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-4 p-5 rounded-lg ${
                  theme === "light" ? "bg-white/70" : "bg-gray-800"
                }`}
              >
                <span className="text-2xl">
                  <TbApi size={50} />
                </span>
                <div>
                  <h3 className="font-semibold mb-1">API Response</h3>
                  <p
                    className={
                      theme === "light"
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }
                  >
                    Clean JSON returned to clients without exposing internal
                    structure
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`mt-6 p-6 rounded-xl ${
                theme === "light"
                  ? "bg-neutral-900 text-green-400"
                  : "bg-neutral-950 text-green-300"
              }`}
            >
              <pre className="overflow-x-auto">
                <code>{`// Entity
                  @Entity
                  public class User {
                      @Id
                      private Long id;
                      private String username;
                      private String password; // Should NOT be exposed
                      private String email;
                      private LocalDateTime createdAt;
                  }

                  // DTO
                  public class UserDTO {
                      private Long id;
                      private String username;
                      private String email;
                      // No password field - better security!
                  }`}</code>
              </pre>
            </div>
          </section>

          {/* Why Use DTO Mapping */}
          <section id="why-mapping" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Why Use DTO Mapping?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div
                className={`p-6 rounded-xl border ${
                  theme === "light"
                    ? "bg-white/70 border-gray-300"
                    : "bg-neutral-900/70 border-gray-600"
                }`}
              >
                <div className="text-3xl mb-3">
                  <TbSchema size={40} />
                </div>
                <h3 className="font-semibold mb-2 text-lg">
                  Separation of Concerns
                </h3>
                <p
                  className={`${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Keep domain logic separate from API contracts
                </p>
              </div>

              <div
                className={`p-6 rounded-xl border ${
                  theme === "light"
                    ? "bg-white/70 border-gray-300"
                    : "bg-neutral-900/70 border-gray-600"
                }`}
              >
                <div className="text-3xl mb-3">
                  <TbRocket size={40} />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Performance</h3>
                <p
                  className={`${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Transfer only necessary data, reduce payload size
                </p>
              </div>

              <div
                className={`p-6 rounded-xl border ${
                  theme === "light"
                    ? "bg-white/70 border-gray-300"
                    : "bg-neutral-900/70 border-gray-600"
                }`}
              >
                <div className="text-3xl mb-3">
                  <SiSpringboot size={40} />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Security</h3>
                <p
                  className={`${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Hide sensitive fields like passwords and internal IDs
                </p>
              </div>

              <div
                className={`p-6 rounded-xl border ${
                  theme === "light"
                    ? "bg-white/70 border-gray-300"
                    : "bg-neutral-900/70 border-gray-600"
                }`}
              >
                <div className="text-3xl mb-3">
                  <TbArrowsExchange size={40} />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Flexibility</h3>
                <p
                  className={`${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Change internal structure without breaking API contracts
                </p>
              </div>
            </div>
          </section>

          {/* MapStruct */}
          <section id="mapstruct" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Using MapStruct
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              MapStruct is a code generator that simplifies mapping between Java
              beans. It generates type-safe mapping code at compile-time, making
              it fast and efficient.
            </p>

            <div
              className={`mb-6 p-6 rounded-xl ${
                theme === "light"
                  ? "bg-neutral-900 text-green-400"
                  : "bg-neutral-950 text-green-300"
              }`}
            >
              <div className="mb-4 text-neutral-400">
                <p>// Add dependency to pom.xml</p>
              </div>
              <pre className="overflow-x-auto">
                <code>
                  {`
                  <dependency>
                    <groupId>org.mapstruct</groupId>
                    <artifactId>mapstruct</artifactId>
                    <version>1.5.5.Final</version>
                  </dependency>

                  <dependency>
                    <groupId>org.mapstruct</groupId>
                    <artifactId>mapstruct-processor</artifactId>
                    <version>1.5.5.Final</version>
                    <scope>provided</scope>
                  </dependency>`}
                </code>
              </pre>
            </div>

            <div
              className={`p-6 rounded-xl ${
                theme === "light"
                  ? "bg-neutral-900 text-green-400"
                  : "bg-neutral-950 text-green-300"
              }`}
            >
              <div className="mb-4 text-neutral-400">
                <p>// Create Mapper Interface</p>
              </div>
              <pre className="overflow-x-auto">
                <code>
                  {`@Mapper(componentModel = "spring")
                  public interface UserMapper {
                      
                      UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
                      
                      UserDTO toDTO(User user);
                      
                      User toEntity(UserDTO userDTO);
                      
                      List<UserDTO> toDTOList(List<User> users);
                      
                      // Custom mapping
                      @Mapping(source = "email", target = "userEmail")
                      @Mapping(target = "password", ignore = true)
                      UserDetailDTO toDetailDTO(User user);
                  }`}
                </code>
              </pre>
            </div>

            <div
              className={`mt-6 p-6 rounded-xl ${
                theme === "light"
                  ? "bg-neutral-900 text-green-400"
                  : "bg-neutral-950 text-green-300"
              }`}
            >
              <div className="mb-4 text-neutral-400">
                <p>// Usage in Service</p>
              </div>
              <pre className="overflow-x-auto">
                <code>{`@Service
                  public class UserService {
                  
                  @Autowired
                  private UserMapper userMapper;
                  
                  @Autowired
                  private UserRepository userRepository;
                  
                  public UserDTO getUserById(Long id) {
                      User user = userRepository.findById(id)
                          .orElseThrow(() -> new ResourceNotFoundException("User not found"));
                      
                      return userMapper.toDTO(user);
                  }
                  
                  public List<UserDTO> getAllUsers() {
                      List<User> users = userRepository.findAll();
                      return userMapper.toDTOList(users);
                  }
                }`}</code>
              </pre>
            </div>
          </section>

          {/* ModelMapper */}
          <section id="modelmapper" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Using ModelMapper
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              ModelMapper is a runtime library that automatically maps objects
              using reflection. It's more flexible but slightly slower than
              MapStruct.
            </p>

            <div
              className={`mb-6 p-6 rounded-xl ${
                theme === "light"
                  ? "bg-neutral-900 text-green-400"
                  : "bg-neutral-950 text-green-300"
              }`}
            >
              <div className="mb-4 text-neutral-400">
                <p>// Add dependency</p>
              </div>
              <pre className="overflow-x-auto">
                <code>
                  {`
                <dependency>
                  <groupId>org.modelmapper</groupId>
                  <artifactId>modelmapper</artifactId>
                  <version>3.1.1</version>
                </dependency>`}
                </code>
              </pre>
            </div>

            <div
              className={`p-6 rounded-xl ${
                theme === "light"
                  ? "bg-neutral-900 text-green-400"
                  : "bg-neutral-950 text-green-300"
              }`}
            >
              <div className="mb-4 text-neutral-400">
                <p>// Configuration</p>
              </div>
              <pre className="overflow-x-auto">
                <code>{`@Configuration
                  public class ModelMapperConfig {
                      
                      @Bean
                      public ModelMapper modelMapper() {
                          ModelMapper modelMapper = new ModelMapper();
                          
                          // Configure mapping strategy
                          modelMapper.getConfiguration()
                              .setMatchingStrategy(MatchingStrategies.STRICT)
                              .setSkipNullEnabled(true);
                          
                          // Custom mapping for specific fields
                          TypeMap<User, UserDTO> typeMap = modelMapper.createTypeMap(User.class, UserDTO.class);
                          typeMap.addMappings(mapper -> {
                              mapper.skip(UserDTO::setPassword);
                          });
                          
                          return modelMapper;
                      }
                  }`}</code>
              </pre>
            </div>

            <div
              className={`mt-6 p-6 rounded-xl ${
                theme === "light"
                  ? "bg-neutral-900 text-green-400"
                  : "bg-neutral-950 text-green-300"
              }`}
            >
              <div className="mb-4 text-neutral-400">
                <p>// Usage in Service</p>
              </div>
              <pre className="overflow-x-auto">
                <code>{`@Service
                  public class ProductService {
                      
                      @Autowired
                      private ModelMapper modelMapper;
                      
                      @Autowired
                      private ProductRepository productRepository;
                      
                      public ProductDTO getProduct(Long id) {
                          Product product = productRepository.findById(id)
                              .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
                          
                          return modelMapper.map(product, ProductDTO.class);
                      }
                      
                      public List<ProductDTO> getAllProducts() {
                          return productRepository.findAll()
                              .stream()
                              .map(product -> modelMapper.map(product, ProductDTO.class))
                              .collect(Collectors.toList());
                      }
                  }`}</code>
              </pre>
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
                  icon: <TbCodeDots size={30} />,
                  text: "Use MapStruct for compile-time safety and better performance in production",
                },
                {
                  icon: <FaMapMarkedAlt size={30} />,
                  text: "Create separate DTOs for different operations (CreateDTO, UpdateDTO, ResponseDTO)",
                },
                {
                  icon: <TbSchema size={30} />,
                  text: "Never expose Entity classes directly in REST controllers",
                },
                {
                  icon: <SiSpringboot size={30} />,
                  text: "Use validation annotations (@Valid, @NotNull) on DTO fields",
                },
                {
                  icon: <TbRocket size={30} />,
                  text: "Keep DTOs simple - avoid business logic in DTO classes",
                },
                {
                  icon: <TbArrowsExchange size={30} />,
                  text: "Use batch mapping for collections to improve performance",
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

          {/* Comparison Table */}
          <section className="mb-12">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              MapStruct vs ModelMapper
            </h2>

            <div
              className={`overflow-x-auto rounded-xl border ${
                theme === "light" ? "border-gray-300" : "border-gray-600"
              }`}
            >
              <table className="w-full">
                <thead
                  className={theme === "light" ? "bg-gray-200" : "bg-gray-800"}
                >
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-left">MapStruct</th>
                    <th className="p-4 text-left">ModelMapper</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className={
                      theme === "light"
                        ? "border-t border-gray-300"
                        : "border-t border-gray-700"
                    }
                  >
                    <td className="p-4">Performance</td>
                    <td className="p-4 text-green-600">
                      Excellent (compile-time)
                    </td>
                    <td className="p-4 text-yellow-600">
                      Good (runtime reflection)
                    </td>
                  </tr>
                  <tr
                    className={
                      theme === "light"
                        ? "border-t border-gray-300"
                        : "border-t border-gray-700"
                    }
                  >
                    <td className="p-4">Type Safety</td>
                    <td className="p-4 text-green-600">Strong</td>
                    <td className="p-4 text-yellow-600">Moderate</td>
                  </tr>
                  <tr
                    className={
                      theme === "light"
                        ? "border-t border-gray-300"
                        : "border-t border-gray-700"
                    }
                  >
                    <td className="p-4">Flexibility</td>
                    <td className="p-4 text-yellow-600">Moderate</td>
                    <td className="p-4 text-green-600">High</td>
                  </tr>
                  <tr
                    className={
                      theme === "light"
                        ? "border-t border-gray-300"
                        : "border-t border-gray-700"
                    }
                  >
                    <td className="p-4">Learning Curve</td>
                    <td className="p-4 text-yellow-600">Steeper</td>
                    <td className="p-4 text-green-600">Easier</td>
                  </tr>
                </tbody>
              </table>
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
                onClick={() => handleNavigate("SpringSecurityBasics")}
                className={`text-left p-6 rounded-xl transition border ${
                  theme === "light"
                    ? "bg-white border-gray-300 hover:border-green-500 hover:shadow-lg"
                    : "bg-gray-800 border-gray-700 hover:border-green-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Spring Security Basics
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "light"
                          ? "text-neutral-600"
                          : "text-neutral-400"
                      }`}
                    >
                      Understand Spring Security and security filter chains
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

export default DtoMappingSpring;
