import { HomeLayout } from "shared";

const Home = () => {
  return <section className="bg-yellow-300">Home works</section>;
};
Home.getLayout = (page) => {
  console.log("Home.getLayout");

  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
