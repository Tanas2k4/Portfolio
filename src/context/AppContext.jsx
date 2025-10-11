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
      home: "Home",
      tech: "Tech",
      projects: "Projects",
      contact: "Contact",
      copyright: "All rights reserved.",
      designed: "Designed & Built by Tran Trong Tan",
      switchToVietnamese: "Switch to Vietnamese",
      switchToEnglish: "Switch to English",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme"
    },
    vi: {
      home: "Trang Chủ",
      tech: "Công Nghệ",
      projects: "Dự Án",
      contact: "Liên Hệ",
      copyright: "Mọi quyền được bảo lưu.",
      designed: "Thiết kế & Xây dựng bởi Trần Trọng Tấn",
      switchToVietnamese: "Chuyển sang tiếng Việt",
      switchToEnglish: "Chuyển sang tiếng Anh",
      lightMode: "Chế Độ Sáng",
      darkMode: "Chế Độ Tối",
      switchToLight: "Chuyển sang chế độ sáng",
      switchToDark: "Chuyển sang chế độ tối"
    }
  };

  const t = translations[language];

  return (
    <AppContext.Provider value={{ language, theme, toggleLanguage, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};