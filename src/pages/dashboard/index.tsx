// Components
import { TabProvider } from 'core/context/TabContext';
import Content from 'views/Innova.views/content.innova/Content';
import { DashboardLayout, RootLayout, Tabs } from 'shared';
// Utiles & Services
import Head from 'next/head';
// Hooks
import { useTranslation } from 'core/context/TranslationContext';

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('dashboard.title')}</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <TabProvider>
        <section className="p-4">
          <div className="flex mb-5">
            <h1 className="text-4xl font-semibold">{t('dashboard.name')}</h1>
          </div>
          <Tabs
            items={[
              { label: 'products.title', id: 0 },
              { label: 'products.users', id: 1 },
              { label: 'products.orders', id: 2 },
              { label: 'products.categories', id: 3 },
              { label: 'products.roles', id: 4 },
            ]}
          />
          {/* data table */}
          <Content />
          {/* data table */}
        </section>
      </TabProvider>
    </>
  );
};
Dashboard.getLayout = (page: any) => {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
export default Dashboard;
