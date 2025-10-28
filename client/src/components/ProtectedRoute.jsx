const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("user");
    if (!user) {
        window.location.href = "/login";
        return null;
    }
    return children;
}

export default ProtectedRoute;