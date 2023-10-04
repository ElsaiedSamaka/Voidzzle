import { RootLayout, SettingsLayout } from "shared";

const Settings = () => {
  return <div>Settings</div>;
};
Settings.getLayout = (page) => {
  console.log("dashboard Settings.getLayout");
  return (
    <RootLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </RootLayout>
  );
};

export default Settings;
