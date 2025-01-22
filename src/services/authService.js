import axios from "axios";


const API_URL = "http://localhost:8081";


export const authenticate = async (url, credentials) => {
    const response = await axios.post(`${API_URL}${url}`, credentials);
    const token = response.data.token;

    localStorage.setItem("token", token);

    return token;
};

export const login = (credentials) => authenticate('/auth/login', credentials);
export const signup = (credentials) => authenticate('/auth/signup', credentials);


export const getToken = () => {
    return localStorage.getItem("token");
};


export const logout = () => {
    localStorage.removeItem("token");
};

export const fetchProtectedData = async (endpoint) => {
    const token = getToken();
    return await axios.get(`${API_URL}/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
