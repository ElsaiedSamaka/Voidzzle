/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

type Dispatch = (action:any) => void;
type State = {
  formState: {
    errors: object;
    isValid: boolean;
    isDirty: boolean;
    isSubmitting: boolean;
  };
  formValue: object;
};
type FormProviderProps = { children: React.ReactNode };
const initialState: State = {
  formState: {
    errors: {},
    isValid: false,
    isDirty: false,
    isSubmitting: false,
  },
  formValue: {},
};
const FormStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function formStateReducer(state: State, action:any) {
  const {
    type,
    formState: { errors, isValid, isDirty, isSubmitting },
    formValue,
  } = action;
  switch (type) {
    case 'FORM.CHANGE':
      return {
        ...state,
        formState: {
          ...action.formState,
        },
        formValue: {
          ...action.formValue,
        },
      };
    case 'SUBMIT':
      return {
        ...state,
        formState: {
          ...action.formState,
          isSubmitting: isSubmitting,
        },
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
    throw new Error('useFormState must be used within a FormStateProvider');
  }
  return context;
}

export { FormStateProvider, useFormStateContext };
