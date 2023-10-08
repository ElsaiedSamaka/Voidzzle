import { createContext, useContext, useReducer } from "react";

// initial state
const initialState = {
  selectedTabIndex: 0,
};
// reducer
const tabReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_TAB":
      console.log("action.payload", action.payload);
      return {
        selectedTabIndex: action.payload,
      };
    default:
      return state;
  }
};
// context
export const TabContext = createContext({
  state: initialState,
  selectTab: (index) => {},
});
// context provider
export const TabProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tabReducer, initialState);

  // wrapper of dispatch function
  const selectTab = (index) => {
    dispatch({ type: "SELECT_TAB", payload: index });
  };

  return (
    <TabContext.Provider value={{ state, selectTab }}>
      {children}
    </TabContext.Provider>
  );
};

// provider of context consumer
export const useTabContext = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};
