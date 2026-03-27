import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
