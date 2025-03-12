import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Button variant="outline-dark" size="sm" onClick={() => setDarkMode(!darkMode)}
    className="fixed bottom-4 left-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow-md"
  >
    {darkMode ? "Light Mode" : "Dark Mode"}
  </Button>
  );
};

export default DarkModeToggle;
