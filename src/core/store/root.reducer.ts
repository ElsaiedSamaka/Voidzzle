import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import productsReducer from './products/products.slice';
import usersReducer from './users/users.slice';
import brandsReducer from './brands/brands.slice'; 

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  users: usersReducer,
  brands: brandsReducer
});

export default rootReducer;
