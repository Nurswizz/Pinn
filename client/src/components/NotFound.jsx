import NavbarMain from "./NavbarMain"

const NotFound = () => {
    return (
        <div>
            <NavbarMain />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Page Not Found</p>
                <a href="/" className="text-blue-500 hover:underline">
                    Go back to Home
                </a>
            </div>
        </div>
    )
}

export default NotFound;