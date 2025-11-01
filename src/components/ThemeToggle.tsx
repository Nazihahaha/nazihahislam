import { Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check if light mode is enabled
    const lightMode = document.documentElement.classList.contains('light');
    setIsLight(lightMode);
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      // Switch to dark mode
      document.documentElement.classList.remove('light');
      setIsLight(false);
    } else {
      // Switch to light mode
      document.documentElement.classList.add('light');
      setIsLight(true);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all ${isLight ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
      <Sun className={`absolute h-5 w-5 transition-all ${isLight ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
    </Button>
  );
};

export default ThemeToggle;
