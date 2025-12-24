import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || "en";
    }
    return "en";
  });
  
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || "dark";
    }
    return "dark";
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === "en" ? "vi" : "en";
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Apply theme to document
  useEffect(() => {
  if (theme === "light") {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  }, [theme]);

  const translations = {
    en: {
      //Navbar
      home: "Home",
      tech: "Tech",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
      switchToVietnamese: "Switch to Vietnamese",
      switchToEnglish: "Switch to English",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",
      // Footer
      copyright: "All rights reserved.",
      designed: "Designed & Built with passion",
  
      // Intro
      helloIm: "Hello, I'm",
      myname: "TRAN TRONG TAN",
      location: "2004, Ben Tre, Vietnam | Studying at HUTECH University (2022 - Present)",
      introDescription: "I'm a final-year Software Engineering student focused on .NET/.NET Core and eager to explore new technologies.",
      goToGithub: "Go to GitHub",
      // Tech
      technologies: "Technologies",
      // Projects
      myProjects: "My Projects",
      forStudentTeamWork: "for student team work",
      forStudentLearnCode: "for student learn code",
      viewDetails: "View Details",
      //blog
      myBlog: "My Blog",
      // Contact
      getInTouch: "Get in touch",
      contactDescription: "If you want to contact, send me an E-mail through this button and i'll respond Whenever I can",
      contactMe: "Contact Me",
      // Project Pages
      backToHome: "Home",
      overview: "Overview",
      techStack: "Tech Stack",
      keyFeatures: "Key Features",
      technologiesUsed: "Technologies Used",
      overallSummary: "Overall Summary",
      tryLiveDemo: "Try Live Demo",
      viewSourceCode: "View Source Code",
      // Zein Team Planner
      zeinTeamPlannerSubtitle: "A comprehensive team management tool for student collaboration",
      zeinTeamPlannerDesc: "Zein Team Planner is a project management platform designed specifically for student teams. It streamlines team collaboration, task management, and project tracking to help students work more efficiently together.",
      zeinTeamPlannerFeature1: "Manage task lists (Tasks) and event schedules (Events)",
      zeinTeamPlannerFeature2: "Assign users/responsible persons to each task",
      zeinTeamPlannerFeature3: "Categorize and display task status (Todo, In Progress, Done)",
      zeinTeamPlannerFeature4: "Manage deadlines and creation dates",
      zeinTeamPlannerFeature5: "Calendar view to track Tasks and Events",
      zeinTeamPlannerFeature6: "Integrated Dashboard with charts and detailed insights",
      zeinTeamPlannerFeature7: "Notifications for each activity or user action",
      zeinTeamPlannerSummary: "The project is a task and event management web application built with ASP.NET Core, Entity Framework, SQL Server, and Bootstrap 5. It provides essential features such as task and event tracking, user assignment, status management, calendar integration, dashboard visualization, and real-time notifications.",
      // Zein IDE
      zeinIDESubtitle: "code editor for programming beginners",
      zeinIDEDesc: "Zein IDE is an IDE built using the Eclipse Theia framework that runs on both browser and desktop. It offers a modular and customizable coding environment and serves as the foundation for projects like HUTECH IDE, which are tailored for student learning and practice.",
      zeinIDEFeature1: "Code editing with syntax highlighting and basic code suggestions",
      zeinIDEFeature2: "Supports multiple programming languages: C/C++, Java, and Python",
      zeinIDEFeature3: "Displays error messages and basic debugging tools for troubleshooting",
      zeinIDEFeature4: "Runs seamlessly on both browser and desktop application versions",
      zeinIDEFeature5: "Multiple theme options including dark and light modes",
      zeinIDESummary: "HUTECH IDE is a customized fork of Zein IDE, built on Eclipse Theia. It runs on both browser and desktop, supports C/C++, Java, and Python, and includes syntax highlighting, error display, debugging, and theme options. The platform is tailored for HUTECH University students to make coding and learning more convenient.",
      // HUTECH IDE
      hutechIDESubtitle: "A specialized IDE platform for HUTECH students to practice coding",
      hutechIDEDesc: "HUTECH IDE is a customized fork of the Zein IDE project, developed for HUTECH University students. It offers an online programming environment where students can practice coding, complete exercises, and receive instant feedback designed to support their learning experience.",
      hutechIDESummary: "The HUTECH IDE provides a simple coding environment with syntax highlighting, code suggestions, and error reporting features. It supports C/C++, Java, and Python, allowing users to write and test code efficiently. The platform also includes basic debugging tools and offers both dark and light themes. It is available in both web and desktop versions for flexible use."
    },
    vi: {
      //Navbar
      home: "Trang chủ",
      tech: "Công nghệ",
      projects: "Dự án",
      blog: "Blog",
      contact: "Liên hệ",
      switchToVietnamese: "Chuyển sang tiếng Việt",
      switchToEnglish: "Chuyển sang tiếng Anh",
      lightMode: "Chế độ sáng",
      darkMode: "Chế độ tối",
      switchToLight: "Chuyển sang chế độ sáng",
      switchToDark: "Chuyển sang chế độ tối",
      // Footer
      copyright: "Mọi quyền được bảo lưu.",
      designed: "Thiết kế & Xây dựng bởi Trần Trọng Tấn",
      
      // Intro
      helloIm: "Xin chào",
      myname: "Trần Trọng Tấn",
      location: "2004, Bến Tre, Việt Nam | Đang học tại Đại học HUTECH (2022 - Hiện tại)",
      introDescription: "Tôi là sinh viên năm cuối ngành Công nghệ hần mềm, quen với .NET nhưng mà đang crush Spring.",
      goToGithub: "Đến GitHub",
      // Tech
      technologies: "Công nghệ",
      // Projects
      myProjects: "Dự án của tôi",
      forStudentTeamWork: "dành cho làm việc nhóm sinh viên",
      forStudentLearnCode: "Dành cho sinh viên học lập trình",
      viewDetails: "Xem chi tiết",
      //blog
      myBlog: "Blog của tôi",
      // Contact
      getInTouch: "Liên hệ với tôi",
      contactDescription: "Nếu bạn muốn liên hệ, hãy gửi e-mail cho tôi qua nút bên dưới và tôi sẽ phản hồi sớm nhất có thể",
      contactMe: "Liên hệ",
      // Project Pages
      backToHome: "Trang chủ",
      overview: "Tổng quan",
      techStack: "Công nghệ",
      keyFeatures: "Tính năng chính",
      technologiesUsed: "Công nghệ sử dụng",
      overallSummary: "Tổng kết",
      tryLiveDemo: "Demo",
      viewSourceCode: "Mã nguồn",
      // Zein Team Planner
      zeinTeamPlannerSubtitle: "Công cụ quản lý nhóm toàn diện cho sinh viên",
      zeinTeamPlannerDesc: "Zein Team Planner là nền tảng quản lý dự án được thiết kế dành riêng cho nhóm sinh viên. Nó giúp tối ưu hóa việc cộng tác nhóm, quản lý công việc và theo dõi dự án để sinh viên làm việc hiệu quả hơn.",
      zeinTeamPlannerFeature1: "Quản lý danh sách công việc (Tasks) và lịch trình sự kiện (Events)",
      zeinTeamPlannerFeature2: "Phân công người dùng/người phụ trách cho từng công việc",
      zeinTeamPlannerFeature3: "Phân loại và hiển thị trạng thái công việc (Todo, In Progress, Done)",
      zeinTeamPlannerFeature4: "Quản lý thời hạn và ngày tạo",
      zeinTeamPlannerFeature5: "Chế độ xem lịch để theo dõi Tasks và Events",
      zeinTeamPlannerFeature6: "Dashboard tích hợp với biểu đồ và thông tin chi tiết",
      zeinTeamPlannerFeature7: "Thông báo cho mỗi hoạt động hoặc hành động của người dùng",
      zeinTeamPlannerSummary: "Dự án là ứng dụng web quản lý công việc và sự kiện được xây dựng bằng ASP.NET Core, Entity Framework, SQL Server và Bootstrap 5. Nó cung cấp các tính năng thiết yếu như theo dõi công việc và sự kiện, phân công người dùng, quản lý trạng thái, tích hợp lịch, trực quan hóa dashboard và thông báo real-time.",
      // Zein IDE
      zeinIDESubtitle: "trình soạn thảo code dành cho người mới học lập trình",
      zeinIDEDesc: "Zein IDE là một IDE được xây dựng sử dụng framework Eclipse Theia, chạy trên cả trình duyệt và máy tính. Nó cung cấp môi trường lập trình modular và có thể tùy chỉnh, đóng vai trò nền tảng cho các dự án như HUTECH IDE, được thiết kế riêng cho việc học tập và thực hành của sinh viên.",
      zeinIDEFeature1: "Soạn thảo code với syntax highlighting và gợi ý code cơ bản",
      zeinIDEFeature2: "Hỗ trợ nhiều ngôn ngữ lập trình: C/C++, Java và Python",
      zeinIDEFeature3: "Hiển thị thông báo lỗi và công cụ debug cơ bản để khắc phục sự cố",
      zeinIDEFeature4: "Chạy mượt mà trên cả phiên bản trình duyệt và ứng dụng desktop",
      zeinIDEFeature5: "Nhiều tùy chọn theme bao gồm chế độ tối và sáng",
      zeinIDESummary: "HUTECH IDE là phiên bản tùy chỉnh của Zein IDE, được xây dựng trên Eclipse Theia. Nó chạy trên cả trình duyệt và desktop, hỗ trợ C/C++, Java và Python, bao gồm syntax highlighting, hiển thị lỗi, debug và tùy chọn theme. Nền tảng được thiết kế riêng cho sinh viên Đại học HUTECH để lập trình và học tập thuận tiện hơn.",
      // HUTECH IDE
      hutechIDESubtitle: "Nền tảng IDE chuyên biệt cho sinh viên HUTECH thực hành lập trình",
      hutechIDEDesc: "HUTECH IDE là phiên bản tùy chỉnh của dự án Zein IDE, được phát triển dành cho sinh viên Đại học HUTECH. Nó cung cấp môi trường lập trình trực tuyến nơi sinh viên có thể thực hành code, hoàn thành bài tập và nhận phản hồi ngay lập tức để hỗ trợ trải nghiệm học tập.",
      hutechIDESummary: "HUTECH IDE cung cấp môi trường lập trình đơn giản với syntax highlighting, gợi ý code và tính năng báo lỗi. Nó hỗ trợ C/C++, Java và Python, cho phép người dùng viết và test code hiệu quả. Nền tảng cũng bao gồm công cụ debug cơ bản và cung cấp cả theme tối và sáng. Nó có sẵn trên cả phiên bản web và desktop để sử dụng linh hoạt."
    }
  };

  const t = translations[language];

  return (
    <AppContext.Provider value={{ language, theme, toggleLanguage, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};
