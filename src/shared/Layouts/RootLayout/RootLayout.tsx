import Breadcrumb from "shared/Common/Breadcrumb/Breadcrumb";
import Header from "shared/Common/Header/Header";

const RootLayout = ({ children }) => {
  return (
    <section className="">
      <Header />

      <section className=" mt-5 md:ml-64">
        <Breadcrumb />
        {children}
      </section>
    </section>
  );
};

export default RootLayout;
