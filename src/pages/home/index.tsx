import { HomeLayout } from "shared";

const Home = () => {
  return <section className="bg-yellow-300">Home works</section>;
};
Home.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
