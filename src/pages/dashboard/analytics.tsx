import DashboardLayout from 'shared/DashboardLayout/DashboardLayout';
import RootLayout from 'shared/Layouts/RootLayout/RootLayout';

const Analytics = () => {
  return (
    <div>Analytics</div>
  )
}
Analytics.getLayout = (page) => (
  <RootLayout>
    <DashboardLayout>{page}</DashboardLayout>
  </RootLayout>
);

export default Analytics