import axios from "axios";


const API_URL = "http://localhost:8081";


export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        const token = response.data.token;
        localStorage.setItem("token", token);
        return { success: true, token };
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            return { success: false, message: "Invalid data"};
        } else if (error.request) {
            return { success: false, message: 'No response from server. Please try again later.' };
        } else {
            return { success: false, message: 'An unexpected error occurred. Please try again.' };
        }
    }
};


export const signup = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signup`, credentials);
        return { success: true, message: response.data.message || 'Signup successful!' };
    } catch (error) {
        if (error.response) {

            if (error.response.status === 409) {
                return { success: false, message: 'User with this email already exists!' };
            }

            console.log(error.response);
            return { success: false, message: error.response.status };
        } else if (error.request) {
            return { success: false, message: 'No response from server. Please try again later.' };
        } else {
            return { success: false, message: 'An unexpected error occurred. Please try again.' };
        }
    }
};

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
