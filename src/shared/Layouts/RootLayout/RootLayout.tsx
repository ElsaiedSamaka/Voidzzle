import getDirection from "core/utils/translations/getDirections";
import { useRouter } from "next/router";
import Header from "shared/Common/Header/Header";

const RootLayout = ({ children }) => {
  const { locale } = useRouter();
  return (
    <section dir={getDirection(locale)} className="root-layout">
      <Header />
      <section className="ltr:md:ml-64 rtl:md:mr-64 root-content">
        {children}
      </section>
    </section>
  );
};

export default RootLayout;
