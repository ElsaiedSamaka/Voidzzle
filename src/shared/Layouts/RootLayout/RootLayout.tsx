import { useThemeContext } from "core/context/ThemeContext";
import getDirection from "core/utils/translations/getDirections";
import { useRouter } from "next/router";
import Header from "shared/Common/Header/Header";

const RootLayout = ({ children }) => {
  const { locale } = useRouter();
  const { theme } = useThemeContext();
  const { mode } = theme;
  return (
    <section
      dir={getDirection(locale)}
      className={`root-layout ${
        mode === "dark"
          ? "bg-dark-bgSecondary text-dark-textSecondary"
          : "bg-light-bgSecondary text-light-textSecondary"
      }`}
    >
      <Header />
      <section className="ltr:md:ml-64 rtl:md:mr-64 root-content">
        {children}
      </section>
    </section>
  );
};

export default RootLayout;
