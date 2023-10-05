import { RootLayout, SettingsLayout } from "shared";

const Settings = () => {
  return <div>Index</div>;
};
Settings.getLayout = (page) => {
  return (
    <RootLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </RootLayout>
  );
};
export default Settings;
