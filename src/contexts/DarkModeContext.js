import React, { createContext, useState } from 'react';
import config from '../config';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(config.darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const contextValue = {
    darkMode,
    toggleDarkMode,
    };


  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};
