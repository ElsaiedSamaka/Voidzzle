import DashboardLayout from 'shared/DashboardLayout/DashboardLayout';
import RootLayout from 'shared/Layouts/RootLayout/RootLayout';

const Settings = () => {
  return (
    <div>Settings</div>
  )
}
Settings.getLayout = (page) => (
  <RootLayout>
    <DashboardLayout>{page}</DashboardLayout>
  </RootLayout>
);

export default Settings