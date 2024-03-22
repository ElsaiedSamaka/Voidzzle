import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import productsReducer from './products/products.slice';
import usersReducer from './users/users.slice';
import { brandsApi } from 'core/services/brands.service';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  users: usersReducer,
  [brandsApi.reducerPath]: brandsApi.reducer,
});

export default rootReducer;
