import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import './ThemeToggle.css';

// PUBLIC_INTERFACE
/**
 * ThemeToggle component provides a UI element to switch between light and dark themes
 * @returns {JSX.Element} Theme toggle switch
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="theme-toggle-wrapper">
      <label className="theme-toggle" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
        <input 
          type="checkbox" 
          checked={theme === 'light'}
          onChange={toggleTheme}
          className="theme-toggle-input"
        />
        <div className="theme-toggle-track">
          <div className="theme-toggle-thumb">
            {theme === 'light' ? (
              <span className="theme-toggle-icon">☀️</span>
            ) : (
              <span className="theme-toggle-icon">🌙</span>
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
