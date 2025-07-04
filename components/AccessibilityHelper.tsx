import React, { useState, useEffect } from 'react';

interface AccessibilityHelperProps {
  children?: React.ReactNode;
}

const AccessibilityHelper: React.FC<AccessibilityHelperProps> = ({ children }) => {
  const [fontSize, setFontSize] = useState<number>(1);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-multiplier', `${fontSize}`);
    localStorage.setItem('accessibility-font-size', fontSize.toString());
  }, [fontSize]);

  // Apply contrast changes
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    localStorage.setItem('accessibility-high-contrast', highContrast.toString());
  }, [highContrast]);

  // Load saved preferences
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFontSize = localStorage.getItem('accessibility-font-size');
      const savedContrast = localStorage.getItem('accessibility-high-contrast');

      if (savedFontSize) {
        setFontSize(parseFloat(savedFontSize));
      }

      if (savedContrast === 'true') {
        setHighContrast(true);
      }
    }
  }, []);

  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      setFontSize(prev => Math.min(prev + 0.1, 1.5));
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.8) {
      setFontSize(prev => Math.max(prev - 0.1, 0.8));
    }
  };

  const resetFontSize = () => {
    setFontSize(1);
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg flex flex-col space-y-2">
        <button
          onClick={increaseFontSize}
          className="p-2 bg-secondary text-white rounded hover:bg-primary transition-colors"
          aria-label="Increase font size"
          title="Increase font size"
        >
          A+
        </button>
        <button
          onClick={decreaseFontSize}
          className="p-2 bg-secondary text-white rounded hover:bg-primary transition-colors"
          aria-label="Decrease font size"
          title="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={resetFontSize}
          className="p-2 bg-secondary text-white rounded hover:bg-primary transition-colors"
          aria-label="Reset font size"
          title="Reset font size"
        >
          A
        </button>
        <button
          onClick={toggleHighContrast}
          className={`p-2 ${highContrast ? 'bg-yellow-500' : 'bg-secondary'} text-white rounded hover:bg-primary transition-colors`}
          aria-label="Toggle high contrast"
          title="Toggle high contrast"
        >
          {highContrast ? '🌙' : '☀️'}
        </button>
      </div>
      {children}
    </>
  );
};

export default AccessibilityHelper;
