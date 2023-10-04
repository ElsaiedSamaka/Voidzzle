import { DashboardLayout, RootLayout } from "shared";

const Settings = () => {
  return <div>Settings</div>;
};
Settings.getLayout = (page) => {
  console.log("dashboard Settings.getLayout");
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};

export default Settings;
