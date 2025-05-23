import React from 'react';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

/**
 * Main ColorEase application container
 * @returns {JSX.Element} Main application component
 */
const ColorEaseApp = () => {
  const { theme } = useTheme();
  
  return (
    <div className="app" data-testid="colorease-app">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="logo">
              <span className="logo-symbol">🎨</span> ColorEase
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          <div className="hero">
            <div className="subtitle">Digital Coloring Made Simple</div>
            
            <h1 className="title">ColorEase: Creative & Relaxing Digital Coloring</h1>
            
            <div className="description">
              Unleash your creativity and find relaxation through digital coloring. 
              Choose from a variety of designs and create beautiful artwork with our 
              intuitive coloring tools.
            </div>
          </div>
          
          <div className="colorease-container fade-in">
            <h2>Start Coloring</h2>
            <div className="canvas-placeholder">
              {theme === 'light' ? 
                'Canvas area - Light Theme' : 
                'Canvas area - Dark Theme'
              }
            </div>
            
            <div className="toolbar">
              <button className="tool-button" title="Pencil">✏️</button>
              <button className="tool-button" title="Brush">🖌️</button>
              <button className="tool-button" title="Paint Bucket">🪣</button>
              <button className="tool-button" title="Eraser">🧽</button>
              <button className="tool-button" title="Undo">↩️</button>
              <button className="tool-button" title="Redo">↪️</button>
              <button className="btn">Save</button>
              <button className="btn">Share</button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>ColorEase © {new Date().getFullYear()} - Creative & Relaxing Digital Coloring</p>
        </div>
      </footer>
    </div>
  );
};

/**
 * App component wraps the application with ThemeProvider
 * @returns {JSX.Element} App component with theme provider
 */
function App() {
  return (
    <ThemeProvider>
      <ColorEaseApp />
    </ThemeProvider>
  );
}

export default App;
