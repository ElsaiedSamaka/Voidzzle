import getDirection from "core/utils/translations/getDirections";
import { useRouter } from "next/router";
import Breadcrumb from "shared/Common/Breadcrumb/Breadcrumb";
import Header from "shared/Common/Header/Header";

const RootLayout = ({ children }) => {
  const { locale } = useRouter();
  return (
    <section dir={getDirection(locale)} className="">
      <Header />
      <div className="pt-1.5 md:ml-64">
        <Breadcrumb />
      </div>
      <section className="md:ml-64 ">{children}</section>
    </section>
  );
};

export default RootLayout;
