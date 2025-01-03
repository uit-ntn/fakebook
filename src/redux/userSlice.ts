import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './userThunk';

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  rememberLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setRememberLogin: (state, action) => {
      state.rememberLogin = action.payload;
    },
  },
  // extraReducers: nơi quản lý các action async (thunk)
  extraReducers: (builder) => {
  },
});

// Tạo các selector để lấy dữ liệu từ Redux store
export const userSelector = (state) => state.user.userInfo;
export const rememberLogin = (state) => state.user.rememberLogin;

export const { setUserInfo, setRememberLogin } = userSlice.actions;

export default userSlice.reducer;
