import { Provider } from "react-redux";
import "../../styles/globals.css";
import { store } from "core/store";
import ContextProvider from "core/context";

function MyApp({ Component, pageProps }) {
  // If page layout is available, use it. Else return the page
  const getLayout = Component.getLayout || ((page) => page);
  // if it does we call it with the page and if it not then we return the page as it is
  return (
    <Provider store={store}>
      <ContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </ContextProvider>
    </Provider>
  );
}

export default MyApp;
