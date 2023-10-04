import Header from "shared/Common/Header/Header";

const RootLayout = ({ children }) => {
  return (
    <section className=" bg-blue-400">
      <Header />
      <section className=" bg-red-500 md:ml-64">{children}</section>
    </section>
  );
};

export default RootLayout;
