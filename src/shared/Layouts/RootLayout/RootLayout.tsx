import Header from "shared/Common/Header/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-blue-400">
      <Header />
      <section className="content bg-red-500">{children}</section>
    </div>
  );
};

export default RootLayout;
