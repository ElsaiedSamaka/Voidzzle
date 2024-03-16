import { DrawerProvider } from './DrawerContext';
import PageContextProvider from './PageContext';
import { SelectedItemsProvider } from '../../shared/Table/shared/context/SelectedItemsContext';
import { ThemeContextProvider } from './ThemeContext';
import { FormStateProvider } from 'shared/Forms/shared/FormContext';
import { TranslationProvider } from './TranslationContext';
import { useRouter } from 'next/router';

// i can then wrap the entire app with this context provider
const ContextProvider = ({ children }) => {
  const { locale } = useRouter();

  return (
    <PageContextProvider>
      <SelectedItemsProvider>
        <FormStateProvider>
          <ThemeContextProvider>
            <TranslationProvider locale={locale}>
              <DrawerProvider>{children}</DrawerProvider>
            </TranslationProvider>
          </ThemeContextProvider>
        </FormStateProvider>
      </SelectedItemsProvider>
    </PageContextProvider>
  );
};

export default ContextProvider;
