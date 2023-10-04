import { RootLayout } from "shared";

const Index = () => {
  return <div>news letter</div>;
};
Index.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Index;
