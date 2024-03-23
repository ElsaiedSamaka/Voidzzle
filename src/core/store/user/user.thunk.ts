import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from 'core/services/auth.service';

export const registerThunk = createAsyncThunk(
  'user/register',
  async (params: object, thunkAPI) => {
    try {
      const response = await authService.register(params);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
    return  thunkAPI.rejectWithValue(error);
    }
  },
);

export const loginThunk = createAsyncThunk(
  'user/login',
  async (params: object, thunkAPI) => {
    try {
      const response = await authService.login(params);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'user/logout',
  async (params: string, thunkAPI) => {
    try {
      const response = await authService.logout(params);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const changePasswordThunk = createAsyncThunk(
  'user/change-password',
  async (params: object, thunkAPI) => {
    try {
      const response = await authService.changePassword(params);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
