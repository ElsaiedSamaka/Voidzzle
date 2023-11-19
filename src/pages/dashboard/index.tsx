import React, { useContext } from "react";
import { DashboardLayout, RootLayout, Table, Tabs } from "shared";
import { TabContext, TabProvider } from "core/context/TabContext";
import Content from "views/Innova.views/content.innova/Content";
import Head from "next/head";
import { useRouter } from "next/router";
import { useThemeContext } from "core/context/ThemeContext";
import useTranslation from "core/hooks/useTranslation";

const Dashboard = () => {
   const router = useRouter();
  const { locale } = router;
  const { theme } = useThemeContext();
  const { mode } = theme;
  const { t } = useTranslation(locale);
  return (
    <>
      <Head>
        <title>{t("dashboard.title")}</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
    <TabProvider>
      <section className="min-h-screen  p-4">
    <div className="flex mb-5">
          <h1 className="text-4xl font-semibold">{t("dashboard.name")}</h1>
        </div>
        {/* taps */}
        <Tabs
          items={[
            { label: "Products", id: 0 },
            { label: "Users", id: 1 },
            { label: "Tasks", id: 2 },
            { label: "Sales", id: 3 },
            { label: "Ads", id: 4 },
          ]}
        />
        {/* taps */}
        {/* data table */}
        <Content />
        {/* data table */}
      </section>
    </TabProvider>
    </>
  );
};
Dashboard.getLayout = (page) => {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
export default Dashboard;
