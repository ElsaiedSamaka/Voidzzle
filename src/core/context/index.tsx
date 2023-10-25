import UserContextProvider from "./AuthContext";
import { DrawerProvider } from "./DrawerContext";
import PageContextProvider from "./PageContext";
// i can then wrap the entire app with this context provider
const ContextProvider = ({ children }) => (
  <UserContextProvider>
    <PageContextProvider>
      <DrawerProvider>{children}</DrawerProvider>
    </PageContextProvider>
  </UserContextProvider>
);

export default ContextProvider;
