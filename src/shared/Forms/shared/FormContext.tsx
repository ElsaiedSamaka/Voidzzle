import * as React from "react";

type Dispatch = (action: any) => void;
type State = {
  errors: Object;
  isValid: Boolean;
  isDirty: Boolean;
  isSubmitting: Boolean;
};
type FormProviderProps = { children: React.ReactNode };
const initialState: State = {
  errors: {},
  isValid: false,
  isDirty: false,
  isSubmitting: false,
};
const FormStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function formStateReducer(state: State, action: any) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        ...action.payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function FormStateProvider({ children }: FormProviderProps) {
  const [state, dispatch] = React.useReducer(formStateReducer, initialState);
  const value = { state, dispatch };
  return (
    <FormStateContext.Provider value={value}>
      {children}
    </FormStateContext.Provider>
  );
}

function useFormStateContext() {
  const context = React.useContext(FormStateContext);
  if (context === undefined) {
    throw new Error("useFormState must be used within a FormStateProvider");
  }
  return context;
}

export { FormStateProvider, useFormStateContext };
