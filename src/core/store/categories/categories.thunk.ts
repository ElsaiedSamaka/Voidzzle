import { createAsyncThunk } from '@reduxjs/toolkit';
import categoriesService from 'core/services/categories.service';

export const getCategoriesThunk = createAsyncThunk(
  'categories/get',
  async (_, thunkAPI) => {
    try {
      const response = await categoriesService.get();
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteCategoryThunk = createAsyncThunk(
  'categories/delete',
  async (id: string, thunkAPI) => {
    try {
      // ideally the resualt of delete request should be deleted product id of the deleted product
      // but since this is a dummy project, we are just returning the id
      const response = await categoriesService.remove(id);
      return thunkAPI.fulfillWithValue(response);
      // return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteAllCategoriesThunk = createAsyncThunk(
  'categories/deleteAll',
  async (ids: [], thunkAPI) => {
    try {
      const response = await categoriesService.removeAll(ids);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const updateCategoryThunk = createAsyncThunk(
  'categories/update',
  async (body: any, thunkAPI) => {
    try {
      const response = await categoriesService.put(body.id, body);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const createCategoryThunk = createAsyncThunk(
  'categories/post',
  async (body: object, thunkAPI) => {
    console.log('createCategoryThunk', body);
    try {
      const response = await categoriesService.postMultiPartFormData(body);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const searchCategoriesThunk = createAsyncThunk(
  'categories/search',
  async (query: string, thunkAPI) => {
    try {
      const response = await categoriesService.search(query);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
