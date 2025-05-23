import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders ColorEase main container', () => {
  render(<App />);
  const titleElement = screen.getByText(/ColorEase: Creative & Relaxing Digital Coloring/i);
  expect(titleElement).toBeInTheDocument();
  
  const subtitleElement = screen.getByText(/Digital Coloring Made Simple/i);
  expect(subtitleElement).toBeInTheDocument();
  
  const canvasArea = screen.getByText(/Canvas area/i);
  expect(canvasArea).toBeInTheDocument();
});

test('renders theme toggle', () => {
  render(<App />);
  const themeToggle = document.querySelector('.theme-toggle-input');
  expect(themeToggle).toBeInTheDocument();
});
