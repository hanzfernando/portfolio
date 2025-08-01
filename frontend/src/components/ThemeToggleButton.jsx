import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative cursor-pointer w-20 h-10 flex items-center justify-between px-3 bg-zinc-300 dark:bg-zinc-700 rounded-full transition-colors duration-300 focus:outline-none shadow-md"
    >
      <Moon className={`w-6 h-6 ${isDark ? "text-zinc-100" : "text-zinc-500"}`} />
      <Sun className={`w-6 h-6 ${!isDark ? "text-yellow-600" : "text-zinc-400"}`} />
      <span
        className={`
          absolute top-[4px] left-[4px] w-8 h-8 rounded-full bg-white dark:bg-zinc-200 shadow 
          transform transition-transform duration-300 
          ${isDark ? "translate-x-0" : "translate-x-10"}
        `}
      />
    </button>
  );
}
