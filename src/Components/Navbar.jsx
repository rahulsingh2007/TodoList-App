const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center bg-white/70 backdrop-blur-md shadow-sm text-gray-800 py-3 px-6 md:px-12 w-full transition-all duration-300 border-b border-gray-200">
            <div className="logo flex items-center gap-3 cursor-pointer group">
                <div className="p-2 bg-indigo-600 rounded-xl group-hover:bg-indigo-700 transition-colors shadow-md group-hover:shadow-lg">
                    <img src="https://www.svgrepo.com/show/418102/todo.svg" alt="Logo" className="w-6 h-6 invert brightness-0" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-indigo-900 group-hover:text-indigo-600 transition-colors">iTask</span>
            </div>
            <ul className="flex gap-6 items-center">
                <li className="cursor-pointer font-medium text-gray-600 hover:text-indigo-600 hover:font-semibold transition-all relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</li>
                <li className="cursor-pointer font-medium text-gray-600 hover:text-indigo-600 hover:font-semibold transition-all relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Your Tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar