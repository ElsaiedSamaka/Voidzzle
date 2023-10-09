import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todos.slice";
import userReducer from "./user/user.slice";
import productsReducer from "./products/products.slice";
import usersReducer from "./users/users.slice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
    products: productsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
