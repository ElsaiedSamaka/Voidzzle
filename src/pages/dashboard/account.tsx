import { DashboardLayout, RootLayout } from "shared";

const Account = () => {
  return <div>account</div>;
};
Account.getLayout = (page) => {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>;
    </RootLayout>
  );
};

export default Account;
