import '../../styles/globals.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'core/store';
import ContextProvider from 'core/context';
import { PersistGate } from 'redux-persist/integration/react';
import type { AppProps } from 'next/app'; // Import AppProps type from next/app

function MyApp({ Component, pageProps }: AppProps) {
  // If page layout is available, use it. Else return the page
  const getLayout = (Component as any).getLayout || ((page: any) => page);
  // if it does we call it with the page and if it not then we return the page as it is
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </ContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
