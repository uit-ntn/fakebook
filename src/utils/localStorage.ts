// Constants for storage keys
const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

// Function to set access token
export const setToken = (token: string): void => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

// Function to get access token
export const getToken = (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

// Function to set refresh token
export const setRefreshToken = (token: string): void => {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

// Function to get refresh token
export const getRefreshToken = (): string | null => {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
};

// Function to remove tokens (logout)
export const removeTokens = (): void => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
};

// Function to check if user is logged in
export const isAuthenticated = (): boolean => {
    return !!getToken();
};
