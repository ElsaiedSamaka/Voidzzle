import { createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "core/services/products.service";

export const getTodosThunk = createAsyncThunk(
  "products/get",
  async (_, thunkAPI) => {
    try {
      const response = await productsService.get();
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "products/delete",
  async (id: any, thunkAPI) => {
    try {
      const response = await productsService.remove(id);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTodoThunk = createAsyncThunk(
  "products/update",
  async (params: any, thunkAPI) => {
    try {
      const response = await productsService.put(params.id, params.body);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createTodoThunk = createAsyncThunk(
  "products/post",
  async (params: any, thunkAPI) => {
    try {
      const response = await productsService.post(params);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
