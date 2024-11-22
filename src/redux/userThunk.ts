import userApi from '../services/authServices';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setRefreshToken, setToken } from '../utils/localStorage';
import _ from 'lodash';

export const loginUser = createAsyncThunk('user/loginUser', async (data) => {
    console.log('loginUSERRRRR');
    const res = await userApi.login(data);
    if (!_.isEmpty(res.accessToken)) {
        setToken(res.accessToken);
        setRefreshToken(res.refreshToken);
        window.location.reload();
    }
});
