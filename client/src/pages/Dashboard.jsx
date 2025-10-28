import NavbarMain from "../components/NavbarMain";
const Dashboard = () => {
    const userName = JSON.parse(localStorage.getItem("user")).username || "User";

    return (
        <div>
            <NavbarMain />
            <div className="flex flex-col p-12">
                <h1 className="text-4xl font-bold">Welcome back, {userName}!</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Ready to continue your learning journey?
                </p>
            </div>
            <div className="flex justify-evenly">
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;