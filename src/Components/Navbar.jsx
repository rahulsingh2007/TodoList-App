import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/useTheme";

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav className="t-nav sticky top-0 z-50 flex justify-between items-center backdrop-blur-md py-3 px-6 md:px-12 w-full transition-all duration-300 border-b">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
                <div className="p-2 bg-indigo-600 rounded-xl group-hover:bg-indigo-700 transition-colors shadow-md">
                    <img src="https://www.svgrepo.com/show/418102/todo.svg" alt="Logo" className="w-6 h-6 invert brightness-0" />
                </div>
                <span className="t-title font-extrabold text-2xl tracking-tight transition-colors group-hover:text-indigo-500">
                    iTask
                </span>
            </div>

            {/* Actions / Theme toggle */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    className="relative flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm t-btn-edit"
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
