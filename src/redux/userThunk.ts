import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi, { LoginData, RegisterData } from "../services/authServices";
import { setToken, setRefreshToken } from "../utils/localStorage";

// Login Thunk
export const loginUser = createAsyncThunk<void, LoginData>(
  "user/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await userApi.login(data);
      const { accessToken, refreshToken } = res;

      if (!accessToken || !refreshToken) {
        throw new Error("Access token or refresh token is missing.");
      }

      setToken(accessToken);
      setRefreshToken(refreshToken);

      console.log("Login successful.");
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Register Thunk
export const registerUser = createAsyncThunk<void, RegisterData>(
  "user/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      await userApi.register(data);
      console.log("Registration successful.");
    } catch (error: any) {
      console.error("Registration failed:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
