import React, { createContext, useState, useEffect, useContext } from 'react';

// PUBLIC_INTERFACE
/**
 * Context for managing theme state across the application
 */
const ThemeContext = createContext();

/**
 * Provider component for theme context
 * @param {Object} props - Component props
 * @returns {JSX.Element} ThemeProvider component
 */
export const ThemeProvider = ({ children }) => {
  // Check if theme is stored in localStorage, default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('colorease-theme');
    return savedTheme || 'dark';
  });

  // PUBLIC_INTERFACE
  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('colorease-theme', newTheme);
      return newTheme;
    });
  };

  // Apply theme to document element when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// PUBLIC_INTERFACE
/**
 * Custom hook to use theme context
 * @returns {Object} Theme context value
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
