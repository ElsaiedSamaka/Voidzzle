import { DashboardLayout, RootLayout } from "shared";

const Settings = () => {
  return <div>Settings</div>;
};
Settings.getLayout = (page) => {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};

export default Settings;
