import * as React from 'react';

type Action =
  | { type: 'add'; payload: any }
  | { type: 'remove'; payload: any }
  | { type: 'reset' };
type Dispatch = (action: Action) => void;
type State = {
  items: any[];
};
type SelectedProviderProps = { children: React.ReactNode };
const initialState = {
  items: [],
};
const SelectedItemsStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function selectedItemsReducer(state: State, action: Action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };

    case 'remove':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'reset':
      return {
        ...state,
        items: [],
      };
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function SelectedItemsProvider({ children }: SelectedProviderProps) {
  const [state, dispatch] = React.useReducer(
    selectedItemsReducer,
    initialState,
  );
  const value = { state, dispatch };
  return (
    <SelectedItemsStateContext.Provider value={value}>
      {children}
    </SelectedItemsStateContext.Provider>
  );
}

function useSelectedItems() {
  const context = React.useContext(SelectedItemsStateContext);
  if (context === undefined) {
    throw new Error(
      'useSelectedItems must be used within a SelectedItemsProvider',
    );
  }
  return context;
}

export { SelectedItemsProvider, useSelectedItems };
