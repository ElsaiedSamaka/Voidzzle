import { RootLayout, SettingsLayout } from "shared";

const Settings = () => {
  return (
    <div>
      Index (Notifications settings, Account settings, Billing settings)
    </div>
  );
};
Settings.getLayout = (page) => {
  return (
    <RootLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </RootLayout>
  );
};
export default Settings;
