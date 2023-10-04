import { DashboardLayout, RootLayout } from "shared";

const Dashboard = () => {
  return <div>Dashboard</div>;
};
Dashboard.getLayout = (page) => {
  console.log("dashboard Dashboard.getLayout");
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>;
    </RootLayout>
  );
};

export default Dashboard;
