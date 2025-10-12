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
      //navbar
      home: "Home",
      tech: "Tech",
      projects: "Projects",
      contact: "Contact",
      switchToVietnamese: "Switch to Vietnamese",
      switchToEnglish: "Switch to English",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",

      //footer
      copyright: "All rights reserved.",
      designed: "Designed & Built by Tran Trong Tan",
      
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

      // Contact
      getInTouch: "Get in touch",
      contactDescription: "If you want to contact, send me an E-mail through this button and i'll respond Whenever I can",
      contactMe: "Contact Me"
    },
    vi: {
      // Navbar
      home: "Trang chủ",
      tech: "Công nghệ",
      projects: "Dự án",
      contact: "Liên hệ",
      switchToVietnamese: "Chuyển sang tiếng Việt",
      switchToEnglish: "Chuyển sang tiếng Anh",
      lightMode: "Chế Độ Sáng",
      darkMode: "Chế Độ Tối",
      switchToLight: "Chuyển sang chế độ sáng",
      switchToDark: "Chuyển sang chế độ tối",

      // Footer
      copyright: "Mọi quyền được bảo lưu.",
      designed: "Thiết kế & Xây dựng bởi Trần Trọng Tấn",
      
      // Intro
      helloIm: "Xin chào, tôi là",
      myname: "Trần Trọng Tấn",
      location: "2004, Bến Tre, Việt Nam | Đang học tại Đại học HUTECH (2022 - Hiện tại)",
      introDescription: "Mình là sinh viên năm cuối ngành Công nghệ Phần mềm, mình khá thích việc tìm hiểu các công nghệ mới nhưng .NET/.NET Core là công nghệ mà mình sử dụng nhiều nhất.",
      goToGithub: "Đến GitHub",
      // Tech
      technologies: "Công nghệ",
      // Projects
      myProjects: "Dự án của tôi",
      forStudentTeamWork: "dành cho làm việc nhóm sinh viên",
      forStudentLearnCode: "dành cho sinh viên học lập trình",
      viewDetails: "Xem Chi Tiết",
      // Contact
      getInTouch: "Liên hệ với tôi",
      contactDescription: "Nếu bạn muốn liên hệ, hãy gửi E-mail cho tôi qua nút bên dưới và tôi sẽ phản hồi sớm nhất có thể",
      contactMe: "Liên Hệ"
    }
  };

  const t = translations[language];

  return (
    <AppContext.Provider value={{ language, theme, toggleLanguage, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};