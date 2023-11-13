import UserContextProvider from "./AuthContext";
import { DrawerProvider } from "./DrawerContext";
import PageContextProvider from "./PageContext";
import {SelectedItemsProvider} from "../../shared/Table/shared/context/SelectedItemsContext"
import { ThemeContextProvider } from "./ThemeContext";
import { FormStateProvider } from "shared/Forms/shared/FormContext";
// i can then wrap the entire app with this context provider
const ContextProvider = ({ children }) => (
  <UserContextProvider>
    <PageContextProvider>
      <SelectedItemsProvider>
        <FormStateProvider>
          <ThemeContextProvider>
            <DrawerProvider>{children}</DrawerProvider>
          </ThemeContextProvider>
        </FormStateProvider>
      </SelectedItemsProvider>
    </PageContextProvider>
  </UserContextProvider>
);

export default ContextProvider;
