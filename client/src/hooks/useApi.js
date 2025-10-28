const useApi = () => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    return { apiBaseUrl };
}

export default useApi;