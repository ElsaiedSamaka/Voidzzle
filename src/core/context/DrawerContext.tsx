import { createContext, useContext, useEffect, useReducer } from "react";

type DrawerState = {
  showDrawer: boolean;
};

// initial state
const initialState = {
  showDrawer: true,
};
// reducer
const drawerReducer = (state: DrawerState, action: any) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      console.log("called");
      return {
        ...state,
        showDrawer: !state.showDrawer,
      };
    default:
      return state;
  }
};
// context
export const DrawerContext = createContext({
  state: initialState,
  toggleDrawer: (value) => {},
});
// context provider
export const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(drawerReducer, initialState);

  // wrapper of dispatch function
  const toggleDrawer = (value: boolean) => {
    dispatch({ type: "TOGGLE_DRAWER", payload: value });
  };

  return (
    <DrawerContext.Provider value={{ state, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

// provider of context consumer
export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawerContext must be used within a DrawerProvider");
  }
  return context;
};
