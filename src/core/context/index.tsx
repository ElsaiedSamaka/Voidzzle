import UserContextProvider from "./AuthContext";
import { DrawerProvider } from "./DrawerContext";
import PageContextProvider from "./PageContext";
import {SelectedItemsProvider} from "../../shared/Table/shared/context/SelectedItemsContext"
// i can then wrap the entire app with this context provider
const ContextProvider = ({ children }) => (
  <UserContextProvider>
    <PageContextProvider>
      <SelectedItemsProvider>
        <DrawerProvider>{children}</DrawerProvider>
      </SelectedItemsProvider>
    </PageContextProvider>
  </UserContextProvider>
);

export default ContextProvider;
