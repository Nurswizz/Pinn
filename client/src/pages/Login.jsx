import NavbarLandingPage from "../components/NavbarLandingPage";
import { useState } from "react";
import useApi from "../hooks/useApi";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const [user, setUser] = useState(null);
  const { apiBaseUrl } = useApi();
  const { login } = useAuth();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!user || !user.username || !user.password) {
        alert("Please fill in all fields");
        return;
    }

    const result = await fetch(`${apiBaseUrl}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const data = await result.json();
    console.log(data);
    if (data.status === 200) {
        login(data);
        alert("Login successful!");
    } else {
        alert("Login failed: " + data.message);
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarLandingPage />
      <div className="flex-grow flex justify-center bg-[#F5F3FF]">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-10">
          <h1 className="text-2xl font-bold text-[#4F46E5]">Login</h1>
          <form action="">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Username
              </label>
              <input
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="text"
                id="username"
                name="username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <button
              onClick={onSubmit}
              className="w-full bg-[#4F46E5] text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              type="button"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
