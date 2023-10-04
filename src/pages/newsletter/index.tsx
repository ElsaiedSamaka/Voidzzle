import OnlyFooterLayout from "shared/Layouts/OnlyFooter/OnlyFooter";

const NewLetter = () => {
  return <div>news letter</div>;
};
NewLetter.getLayout = (page) => <OnlyFooterLayout>{page}</OnlyFooterLayout>;
export default NewLetter;
