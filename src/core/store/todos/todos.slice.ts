import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "core/models";
import {
  createTodoThunk,
  deleteTodoThunk,
  getTodosThunk,
  updateTodoThunk,
} from "./todos.thunk";

interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // getTodos: (state, action) => {
    //   state.todos = action.payload;
    // },
    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },
    // updateTodo: (state, action) => {
    //   state.todos = state.todos.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return action.payload;
    //     }
    //     return todo;
    //   });
    // },
    // deleteTodo: (state, action) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // },
    // toggleTodo: (state, action) => {
    //   state.todos = state.todos.map((todo) => {
    //     if (todo.id === action.payload) {
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   });
    // },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getTodos
    builder
      .addCase(getTodosThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodosThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTodosThunk.fulfilled, (state, action) => {
        // getting todos from api action payload is the response of getTodos service
        state.todos = action.payload;
        state.loading = false;
        state.error = null;
      });
    // createTodo
    builder
      .addCase(createTodoThunk.fulfilled, (state, action) => {
        // appending new todo to the todos array
        state.todos.push(action.payload);
        // unshift new todo to the todos array
        // state.todos.unshift(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createTodoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTodoThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // updateTodo
    builder
      .addCase(updateTodoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        });
      })
      .addCase(updateTodoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateTodoThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
    // deleteTodo
    builder
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTodoThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const { setLoading, setError } = todosSlice.actions;
export default todosSlice.reducer;
