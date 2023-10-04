import UserContextProvider from "./AuthContext";
import PageContextProvider from "./PageContext";
// i can then wrap the entire app with this context provider
const ContextProvider = ({ children }) => (
  <UserContextProvider>
    <PageContextProvider>{children}</PageContextProvider>
  </UserContextProvider>
);

export default ContextProvider;
