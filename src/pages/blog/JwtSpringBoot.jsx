import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import { FaLock, FaKey, FaShieldAlt, FaUserLock } from "react-icons/fa";
import { MdSecurity, MdCheckCircle, MdWarning, MdTimer } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { AiOutlineApi } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiToken } from "react-icons/gi";

const JwtSpringBoot = () => {
  const { theme, t } = useApp();
  const navigate = useApp().navigate;
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "what-is", title: "What is JWT?" },
    { id: "how-work", title: "How JWT Works" },
    { id: "implementation", title: "Spring Boot Implementation" },
    { id: "security", title: "Security Best Practices" },
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
                    ? "bg-green-500/20 text-green-700"
                    : "bg-green-400/30 text-green-200"
                }`}
              >
                Java • Spring Boot • Security • 2024
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight">
              JWT Authentication in Spring Boot
            </h1>

            <p
              className={`text-xl leading-relaxed ${
                theme === "light" ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              Building secure, stateless authentication with JSON Web Tokens
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
              <FaShieldAlt className="text-blue-500 text-3xl flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                JWT (JSON Web Token) is an open standard for securely
                transmitting information between parties as a JSON object. It's
                compact, self-contained, and perfect for stateless
                authentication in modern applications.
              </p>
            </div>
          </section>

          <section id="what-is" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              What is JWT?
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              A JWT consists of three parts separated by dots:
              Header.Payload.Signature. Each part is Base64Url encoded and
              contains specific information about the token.
            </p>

            <div
              className={`rounded-xl p-6 mb-6 border ${
                theme === "light"
                  ? "bg-white border-gray-300"
                  : "bg-gray-900 border-gray-700"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">JWT Structure</h3>
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg ${
                    theme === "light" ? "bg-red-50" : "bg-red-900/20"
                  }`}
                >
                  <div className="font-mono text-sm break-all text-red-600 dark:text-red-400 mb-2">
                    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
                  </div>
                  <div className="text-sm font-semibold">🔴 HEADER</div>
                  <div className="text-sm mt-2">Algorithm & Token Type</div>
                </div>

                <div
                  className={`p-4 rounded-lg ${
                    theme === "light" ? "bg-purple-50" : "bg-purple-900/20"
                  }`}
                >
                  <div className="font-mono text-sm break-all text-purple-600 dark:text-purple-400 mb-2">
                    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
                  </div>
                  <div className="text-sm font-semibold">🟣 PAYLOAD</div>
                  <div className="text-sm mt-2">
                    Claims (User data, expiration, etc.)
                  </div>
                </div>

                <div
                  className={`p-4 rounded-lg ${
                    theme === "light" ? "bg-green-50" : "bg-green-900/20"
                  }`}
                >
                  <div className="font-mono text-sm break-all text-green-600 dark:text-green-400 mb-2">
                    SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                  </div>
                  <div className="text-sm font-semibold">🟢 SIGNATURE</div>
                  <div className="text-sm mt-2">Verification hash</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div
                className={`flex flex-col items-center gap-3 p-5 rounded-lg text-center ${
                  theme === "light"
                    ? "bg-white border border-gray-300"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                <MdSecurity className="text-blue-500 text-4xl" />
                <h3 className="font-semibold">Stateless</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  No server-side session storage needed
                </p>
              </div>

              <div
                className={`flex flex-col items-center gap-3 p-5 rounded-lg text-center ${
                  theme === "light"
                    ? "bg-white border border-gray-300"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                <GiToken className="text-green-500 text-4xl" />
                <h3 className="font-semibold">Self-Contained</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Token contains all user information
                </p>
              </div>

              <div
                className={`flex flex-col items-center gap-3 p-5 rounded-lg text-center ${
                  theme === "light"
                    ? "bg-white border border-gray-300"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                <AiOutlineApi className="text-purple-500 text-4xl" />
                <h3 className="font-semibold">Scalable</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Perfect for microservices architecture
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
              How JWT Works
            </h2>

            <div
              className={`p-6 rounded-xl border mb-6 ${
                theme === "light"
                  ? "bg-blue-50 border-blue-300"
                  : "bg-blue-900/20 border-blue-700"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">
                Authentication Flow
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      theme === "light"
                        ? "bg-blue-200 text-blue-700"
                        : "bg-blue-700 text-blue-200"
                    }`}
                  >
                    1
                  </span>
                  <div>
                    <strong>User Login:</strong> Client sends credentials
                    (username/password) to server
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      theme === "light"
                        ? "bg-blue-200 text-blue-700"
                        : "bg-blue-700 text-blue-200"
                    }`}
                  >
                    2
                  </span>
                  <div>
                    <strong>Validation:</strong> Server validates credentials
                    against database
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      theme === "light"
                        ? "bg-blue-200 text-blue-700"
                        : "bg-blue-700 text-blue-200"
                    }`}
                  >
                    3
                  </span>
                  <div>
                    <strong>Token Generation:</strong> Server creates JWT with
                    user info and signs it
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      theme === "light"
                        ? "bg-blue-200 text-blue-700"
                        : "bg-blue-700 text-blue-200"
                    }`}
                  >
                    4
                  </span>
                  <div>
                    <strong>Token Storage:</strong> Client stores JWT (usually
                    in localStorage or cookie)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      theme === "light"
                        ? "bg-blue-200 text-blue-700"
                        : "bg-blue-700 text-blue-200"
                    }`}
                  >
                    5
                  </span>
                  <div>
                    <strong>Authenticated Requests:</strong> Client includes JWT
                    in Authorization header for subsequent requests
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      theme === "light"
                        ? "bg-blue-200 text-blue-700"
                        : "bg-blue-700 text-blue-200"
                    }`}
                  >
                    6
                  </span>
                  <div>
                    <strong>Verification:</strong> Server verifies JWT signature
                    and grants access
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="implementation" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Spring Boot Implementation
            </h2>

            <h3 className="text-2xl font-semibold mb-4">
              1. Dependencies (pom.xml)
            </h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <BiCodeBlock className="text-orange-500" size={24} />
                <span className="font-semibold">Maven Dependencies</span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`
                <dependencies>
                  <!-- Spring Security -->
                  <dependency>
                      <groupId>org.springframework.boot</groupId>
                      <artifactId>spring-boot-starter-security</artifactId>
                  </dependency>
                  
                  <!-- JWT -->
                  <dependency>
                      <groupId>io.jsonwebtoken</groupId>
                      <artifactId>jjwt-api</artifactId>
                      <version>0.11.5</version>
                  </dependency>
                  <dependency>
                      <groupId>io.jsonwebtoken</groupId>
                      <artifactId>jjwt-impl</artifactId>
                      <version>0.11.5</version>
                      <scope>runtime</scope>
                  </dependency>
                  <dependency>
                      <groupId>io.jsonwebtoken</groupId>
                      <artifactId>jjwt-jackson</artifactId>
                      <version>0.11.5</version>
                      <scope>runtime</scope>
                  </dependency>
                </dependencies>`}
              </code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">
              2. JWT Utility Class
            </h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <FaKey className="text-green-500" size={24} />
                <span className="font-semibold">JwtUtil.java</span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`@Component
                  public class JwtUtil {
                      
                      @Value("\${jwt.secret}")
                      private String SECRET_KEY;
                      
                      private static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
                      
                      public String generateToken(UserDetails userDetails) {
                          Map<String, Object> claims = new HashMap<>();
                          return createToken(claims, userDetails.getUsername());
                      }
                      
                      private String createToken(Map<String, Object> claims, String subject) {
                          return Jwts.builder()
                                  .setClaims(claims)
                                  .setSubject(subject)
                                  .setIssuedAt(new Date(System.currentTimeMillis()))
                                  .setExpiration(new Date(System.currentTimeMillis() 
                                      + JWT_TOKEN_VALIDITY * 1000))
                                  .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                                  .compact();
                      }
                      
                      private Key getSigningKey() {
                          byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
                          return Keys.hmacShaKeyFor(keyBytes);
                      }
                      
                      public String extractUsername(String token) {
                          return extractClaim(token, Claims::getSubject);
                      }
                      
                      public Date extractExpiration(String token) {
                          return extractClaim(token, Claims::getExpiration);
                      }
                      
                      public <T> T extractClaim(String token, 
                              Function<Claims, T> claimsResolver) {
                          final Claims claims = extractAllClaims(token);
                          return claimsResolver.apply(claims);
                      }
                      
                      private Claims extractAllClaims(String token) {
                          return Jwts.parserBuilder()
                                  .setSigningKey(getSigningKey())
                                  .build()
                                  .parseClaimsJws(token)
                                  .getBody();
                      }
                      
                      private Boolean isTokenExpired(String token) {
                          return extractExpiration(token).before(new Date());
                      }
                      
                      public Boolean validateToken(String token, UserDetails userDetails) {
                          final String username = extractUsername(token);
                          return (username.equals(userDetails.getUsername()) 
                              && !isTokenExpired(token));
                      }
                  }`}
                </code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">3. JWT Filter</h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <FaLock className="text-blue-500" size={24} />
                <span className="font-semibold">
                  JwtAuthenticationFilter.java
                </span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`@Component
                  public class JwtAuthenticationFilter extends OncePerRequestFilter {
                      
                      @Autowired
                      private JwtUtil jwtUtil;
                      
                      @Autowired
                      private UserDetailsService userDetailsService;
                      
                      @Override
                      protected void doFilterInternal(
                              HttpServletRequest request,
                              HttpServletResponse response,
                              FilterChain filterChain) throws ServletException, IOException {
                          
                          final String authHeader = request.getHeader("Authorization");
                          final String jwt;
                          final String username;
                          
                          if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                              filterChain.doFilter(request, response);
                              return;
                          }
                          
                          jwt = authHeader.substring(7);
                          username = jwtUtil.extractUsername(jwt);
                          
                          if (username != null && 
                              SecurityContextHolder.getContext().getAuthentication() == null) {
                              UserDetails userDetails = 
                                  userDetailsService.loadUserByUsername(username);
                              
                              if (jwtUtil.validateToken(jwt, userDetails)) {
                                  UsernamePasswordAuthenticationToken authToken = 
                                      new UsernamePasswordAuthenticationToken(
                                          userDetails, null, userDetails.getAuthorities()
                                      );
                                  
                                  authToken.setDetails(
                                      new WebAuthenticationDetailsSource()
                                          .buildDetails(request)
                                  );
                                  
                                  SecurityContextHolder.getContext()
                                      .setAuthentication(authToken);
                              }
                          }
                          
                          filterChain.doFilter(request, response);
                      }
                  }`}
                </code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">
              4. Security Configuration
            </h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <MdSecurity className="text-purple-500" size={24} />
                <span className="font-semibold">SecurityConfig.java</span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`@Configuration
                  @EnableWebSecurity
                  public class SecurityConfig {
                      
                      @Autowired
                      private JwtAuthenticationFilter jwtAuthFilter;
                      
                      @Bean
                      public SecurityFilterChain securityFilterChain(HttpSecurity http) 
                              throws Exception {
                          http
                              .csrf(csrf -> csrf.disable())
                              .authorizeHttpRequests(auth -> auth
                                  .requestMatchers("/api/auth/**").permitAll()
                                  .anyRequest().authenticated()
                              )
                              .sessionManagement(session -> session
                                  .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                              )
                              .addFilterBefore(jwtAuthFilter, 
                                  UsernamePasswordAuthenticationFilter.class);
                          
                          return http.build();
                      }
                      
                      @Bean
                      public PasswordEncoder passwordEncoder() {
                          return new BCryptPasswordEncoder();
                      }
                      
                      @Bean
                      public AuthenticationManager authenticationManager(
                              AuthenticationConfiguration config) throws Exception {
                          return config.getAuthenticationManager();
                      }
                  }`}
                </code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">
              5. Authentication Controller
            </h3>

            <div
              className={`rounded-xl p-6 mb-6 ${
                theme === "light"
                  ? "bg-neutral-100 border border-gray-300"
                  : "bg-neutral-900 border border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <AiOutlineApi className="text-red-500" size={24} />
                <span className="font-semibold">AuthController.java</span>
              </div>
              <pre
                className={`p-4 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-green-400"
                    : "bg-neutral-950 text-green-300"
                }`}
              >
                <code>{`@RestController
                  @RequestMapping("/api/auth")
                  public class AuthController {
                      
                      @Autowired
                      private AuthenticationManager authenticationManager;
                      
                      @Autowired
                      private JwtUtil jwtUtil;
                      
                      @Autowired
                      private UserDetailsService userDetailsService;
                      
                      @PostMapping("/login")
                      public ResponseEntity<?> login(@RequestBody LoginRequest request) {
                          try {
                              authenticationManager.authenticate(
                                  new UsernamePasswordAuthenticationToken(
                                      request.getUsername(),
                                      request.getPassword()
                                  )
                              );
                              
                              UserDetails userDetails = userDetailsService
                                  .loadUserByUsername(request.getUsername());
                              
                              String jwt = jwtUtil.generateToken(userDetails);
                              
                              return ResponseEntity.ok(new AuthResponse(jwt));
                              
                          } catch (BadCredentialsException e) {
                              return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                                  .body("Invalid username or password");
                          }
                      }
                  }`}
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
                <span className="font-semibold">Important Note</span>
              </div>
              <p className="mb-2">
                Generate a strong secret key for production using:
              </p>
              <pre
                className={`p-3 rounded-lg overflow-x-auto ${
                  theme === "light"
                    ? "bg-neutral-900 text-yellow-400"
                    : "bg-neutral-950 text-yellow-300"
                }`}
              >
                <code>openssl rand -base64 32</code>
              </pre>
            </div>
          </section>

          <section id="security" className="mb-12 scroll-mt-24">
            <h2
              className={`mb-6 text-3xl font-bold ${
                theme === "light" ? "text-neutral-900" : "text-neutral-100"
              }`}
            >
              Security Best Practices
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: <FaKey />,
                  title: "Strong Secret Keys",
                  text: "Use 256-bit or stronger keys. Never hardcode secrets in source code. Use environment variables or secure vaults.",
                },
                {
                  icon: <MdTimer />,
                  title: "Short Expiration Times",
                  text: "Set reasonable token expiration (15-60 minutes for access tokens). Implement refresh tokens for extended sessions.",
                },
                {
                  icon: <FaUserLock />,
                  title: "HTTPS Only",
                  text: "Always transmit JWT over HTTPS to prevent man-in-the-middle attacks. Never send tokens over plain HTTP.",
                },
                {
                  icon: <RiLockPasswordLine />,
                  title: "Token Storage",
                  text: "Store tokens securely. Use httpOnly cookies for web apps to prevent XSS attacks. Avoid localStorage when possible.",
                },
                {
                  icon: <MdSecurity />,
                  title: "Validate Everything",
                  text: "Always validate token signature, expiration, and claims. Never trust client-provided data without verification.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Implement Token Revocation",
                  text: "Maintain a blacklist or use short-lived tokens with refresh mechanism to handle compromised tokens.",
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
                <MdCheckCircle className="text-green-500" size={28} />
                Key Takeaways
              </h3>
              <ul className="space-y-2 ml-8 list-disc">
                <li>
                  JWT provides stateless authentication perfect for REST APIs
                  and microservices
                </li>
                <li>Always use strong secret keys and keep them secure</li>
                <li>Implement proper token validation and expiration</li>
                <li>Use HTTPS to protect tokens in transit</li>
                <li>
                  Consider implementing refresh tokens for better security
                </li>
                <li>
                  Never store sensitive information in JWT payload (it's Base64,
                  not encrypted!)
                </li>
              </ul>
            </div>

            <div
              className={`mt-8 rounded-xl p-6 border ${
                theme === "light"
                  ? "bg-blue-50 border-blue-300"
                  : "bg-blue-900/20 border-blue-700"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MdTimer className="text-blue-500" size={28} />
                Common Pitfalls to Avoid
              </h3>
              <ul className="space-y-2 ml-8 list-disc">
                <li>
                  Don't hardcode secrets in your code - use environment
                  variables
                </li>
                <li>
                  Don't store sensitive data in JWT payload - it's not encrypted
                </li>
                <li>
                  Don't skip token validation - always verify signature and
                  expiration
                </li>
                <li> Don't use weak secret keys - minimum 256-bit</li>
                <li>
                  Don't forget HTTPS - tokens are vulnerable to interception
                </li>
                <li>
                  Don't set long expiration times - balance security with
                  usability
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
                      Learn the foundations of Spring Security and security
                      filter chains
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
                  <FaKey className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
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
                      techniques
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

export default JwtSpringBoot;
