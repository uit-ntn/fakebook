import { createAsyncThunk } from '@reduxjs/toolkit'
import _ from 'lodash'
import { setRefreshToken, setToken } from '../utils/localStorage'
import userApi, { LoginData } from '../services/authServices'


// Thunk will call API login và save token into localStorage
export const loginUser = createAsyncThunk<void, LoginData>(
  'user/loginUser',

  //data is LoginData (chứa username, password)
  async (data) => {
    console.log('loginUSERRRRR')

    // userApi.login(data) return AxiosResponse
    // => token nằm trong res.data
    const res = await userApi.login(data)

    if (!_.isEmpty(res.data.accessToken)) {
      setToken(res.data.accessToken)
      setRefreshToken(res.data.refreshToken)
      window.location.reload()
    }
  }
)
