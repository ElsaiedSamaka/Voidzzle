import { RootLayout } from "shared";

const Settings = () => {
  return <div>Index</div>;
};
Settings.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Settings;
