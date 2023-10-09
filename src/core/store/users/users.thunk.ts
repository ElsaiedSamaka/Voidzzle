import { createAsyncThunk } from "@reduxjs/toolkit";
import todossService from "core/services/todos.service";

export const getTodosThunk = createAsyncThunk(
  "users/get",
  async (_, thunkAPI) => {
    try {
      const response = await todossService.get();
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "users/delete",
  async (id: any, thunkAPI) => {
    try {
      const response = await todossService.remove(id);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTodoThunk = createAsyncThunk(
  "users/update",
  async (params: any, thunkAPI) => {
    try {
      const response = await todossService.put(params.id, params.body);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createTodoThunk = createAsyncThunk(
  "users/post",
  async (params: any, thunkAPI) => {
    try {
      const response = await todossService.post(params);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
