import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/useTheme";

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-sm dark:shadow-gray-900/50 text-gray-800 dark:text-gray-100 py-3 px-6 md:px-12 w-full transition-all duration-300 border-b border-gray-200 dark:border-gray-700/60">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
                <div className="p-2 bg-indigo-600 rounded-xl group-hover:bg-indigo-700 transition-colors shadow-md">
                    <img src="https://www.svgrepo.com/show/418102/todo.svg" alt="Logo" className="w-6 h-6 invert brightness-0" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-indigo-900 dark:text-indigo-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    iTask
                </span>
            </div>
            <div className="flex items-center gap-6">
                <button
                    onClick={toggleTheme}
                    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-yellow-400 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                >
                    <span className={`absolute transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}>
                        <Sun size={18} />
                    </span>
                    <span className={`absolute transition-all duration-300 ${isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}>
                        <Moon size={18} />
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
