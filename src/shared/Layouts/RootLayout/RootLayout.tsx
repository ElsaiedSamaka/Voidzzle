import Breadcrumb from "shared/Common/Breadcrumb/Breadcrumb";
import Header from "shared/Common/Header/Header";

const RootLayout = ({ children }) => {
  return (
    <section className="">
      <Header />

      <section className=" pt-3 md:ml-64">
        <div className="w-full bg-white">
          <Breadcrumb />
        </div>
        {children}
      </section>
    </section>
  );
};

export default RootLayout;
