import React, { useContext } from "react";
import { InnovaLayout, RootLayout, Table, Tabs } from "shared";
import { TabContext, TabProvider } from "core/context/TabContext";
const InnvoaPage = () => {
  const { state } = useContext(TabContext);
  const { selectedTabIndex } = state;
  console.log("selectedTabIndex [InnvoaPage]", selectedTabIndex);
  return (
    <TabProvider>
      <section className="min-h-screen  p-4">
        {/* page head */}
        <div className="flex mb-5">
          <h1 className="text-4xl font-semibold">Innova</h1>
        </div>
        {/* page head */}
        {/* taps */}
        <Tabs items={["Products", "Users", "Tasks", "Sales", "Ads"]} />
        {/* taps */}
        {/* data table */}
        {selectedTabIndex === 0 && <div>products</div>}
        {selectedTabIndex === 1 && <div>users</div>}
        {selectedTabIndex === 2 && <div>tasks</div>}
        {selectedTabIndex === 3 && <div>sales</div>}
        {selectedTabIndex === 4 && <div>ads</div>}
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
