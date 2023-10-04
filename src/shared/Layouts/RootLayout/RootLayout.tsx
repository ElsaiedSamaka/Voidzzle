import Header from "shared/Common/Header/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-blue-400">
      <Header />
      <span className="md:ml-64 text-white">
        RootLayout (contains both nav and aside as header component)
      </span>
      <section className="content bg-red-500 md:ml-64">
        <span className="text-white">content of RooterLayout is red</span>
        {children}
      </section>
    </div>
  );
};

export default RootLayout;
