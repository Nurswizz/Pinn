const NavbarLandingPage = () => {
    return (
        <nav className="font-medium text-lg p-4 shadow-sm flex justify-between items-center px-12">
            <div>
                <a className="text-4xl font-bold bg-gradient-to-r from-[#7F22FE] to-[#155DFC] bg-clip-text text-transparent" href="/">Pinn</a>
            </div>
            <ul className="flex space-x-12">
                <li className="inline-block"><a href="#features" className="hover:text-blue-500">Features</a></li>
                <li className="inline-block"><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
                <li className="inline-block"><a href="#about" className="hover:text-blue-500">About</a></li>
                <li className="inline-block"><a href="/login" className="hover:text-blue-500">Login</a></li>
                <li className="inline-block"><a href="/signup" className="hover:text-blue-500">Sign Up</a></li>
            </ul>
        </nav>
    );
}

export default NavbarLandingPage;