import { DashboardLayout } from "shared";

const Account = () => {
  return <div>account</div>;
};
Account.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Account;
