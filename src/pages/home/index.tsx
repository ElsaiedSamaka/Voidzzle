import { HomeLayout, RootLayout } from "shared";

const Home = () => {
  return <section className="bg-yellow-300">Home page is yellow</section>;
};
Home.getLayout = (page) => {
  console.log("Home.getLayout");
  return (
    <RootLayout>
      <HomeLayout>{page}</HomeLayout>
    </RootLayout>
  );
};

export default Home;
