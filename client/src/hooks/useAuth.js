const useAuth = () => {
    const login = (data) => {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/dashboard';
    };
    const isAuthenticated = () => {
        return !!localStorage.getItem('accessToken');
    }
    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
    };

    return { login, logout, isAuthenticated };
}

export default useAuth;