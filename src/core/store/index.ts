import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import productsReducer from "./products/products.slice";
import usersReducer from "./users/users.slice";
import brandsReducer from "./brands/brands.slice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    users: usersReducer,
    brands: brandsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// thunks are nothing but Redux Action Creator that can be dispatch