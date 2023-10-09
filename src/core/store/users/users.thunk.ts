import { createAsyncThunk } from "@reduxjs/toolkit";
import usersService from "core/services/users.service";

export const getUsersThunk = createAsyncThunk(
  "users/get",
  async (_, thunkAPI) => {
    try {
      const response = await usersService.get();
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  "users/delete",
  async (id: any, thunkAPI) => {
    try {
      const response = await usersService.remove(id);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/update",
  async (params: any, thunkAPI) => {
    try {
      const response = await usersService.put(params.id, params.body);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createUserThunk = createAsyncThunk(
  "users/post",
  async (params: any, thunkAPI) => {
    try {
      const response = await usersService.post(params);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
