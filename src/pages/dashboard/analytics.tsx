import { DashboardLayout, RootLayout } from "shared";

const Analytics = () => {
  return <div>Analytics</div>;
};
Analytics.getLayout = (page) => {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};

export default Analytics;
