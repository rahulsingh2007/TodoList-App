const Navbar = () => {
    return (
        <nav className="flex justify-between bg-indigo-900 text-white py-2">
            <div className="logo flex gap-2 mx-4">
                <img src="https://www.svgrepo.com/show/418102/todo.svg" alt="Logo" className="w-8 bg-white rounded-full" />
                <span className="font-bold text-xl">iTask</span>
            </div>
            <ul className="flex gap-8 mx-9">
                <li className="cursor-pointer hover:font-bold transition-all">Your Task</li>
            </ul>
        </nav>
    )
}

export default Navbar