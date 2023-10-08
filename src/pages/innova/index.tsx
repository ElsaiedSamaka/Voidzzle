import React, { useContext } from "react";
import { InnovaLayout, RootLayout, Table, Tabs } from "shared";
import { TabContext, TabProvider } from "core/context/TabContext";
import Content from "views/Innova.views/Content";
const InnvoaPage = () => {
  return (
    <TabProvider>
      <section className="min-h-screen  p-4">
        {/* page head */}
        <div className="flex mb-5">
          <h1 className="text-4xl font-semibold">Innova</h1>
        </div>
        {/* page head */}
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
  );
};
InnvoaPage.getLayout = (page) => {
  return (
    <RootLayout>
      <InnovaLayout>{page}</InnovaLayout>
    </RootLayout>
  );
};
export default InnvoaPage;
