import React from 'react'
import { InnovaLayout, RootLayout, Table, Tabs } from "shared";

const InnvoaPage = () => {
  return (
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
      <Table />
      {/* data table */}
    </section>
  );
};
InnvoaPage.getLayout = (page) => {
    return (
      <RootLayout>
        <InnovaLayout>
          {page}
          </InnovaLayout>
        </RootLayout>
    )
}
export default InnvoaPage