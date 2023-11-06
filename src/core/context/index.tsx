import UserContextProvider from "./AuthContext";
import { DrawerProvider } from "./DrawerContext";
import PageContextProvider from "./PageContext";
import {SelectedItemsProvider} from "../../shared/Table/shared/context/SelectedItemsContext"
import { ThemeContextProvider } from "./ThemeContext";
// i can then wrap the entire app with this context provider
const ContextProvider = ({ children }) => (
  <UserContextProvider>
    <PageContextProvider>
      <SelectedItemsProvider>
        <ThemeContextProvider>
          <DrawerProvider>{children}</DrawerProvider>
        </ThemeContextProvider>
      </SelectedItemsProvider>
    </PageContextProvider>
  </UserContextProvider>
);

export default ContextProvider;
