import { RootLayout } from "shared";

const NewLetter = () => {
  return <div>news letter</div>;
};
NewLetter.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default NewLetter;
