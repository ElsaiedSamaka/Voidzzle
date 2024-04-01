import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './auth/user.slice';
import productsReducer from './products/products.slice';
import usersReducer from './users/users.slice';
import categoriesReducer from './categories/categories.slice';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  users: usersReducer,
  categoires: categoriesReducer,
  // RTK REDUCER 👇
  // brands: brandsReducer,
});

export default rootReducer;
