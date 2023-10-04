import Head from "next/head";
import { Provider } from "react-redux";
import RootLayout from "shared/Layouts/RootLayout/RootLayout";
import { store } from "../core/store";
import Home from "./home";
const IndexPage = () => {
  return (
    <>
      <Head>
        <title>qTech Task | Next12</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <Provider store={store}>
        <main className="bg-green-400 p-4 md:ml-64 h-auto pt-20">
          <Home />
          {/* <NewLetter /> */}
        </main>
      </Provider>
    </>
  );
};

IndexPage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default IndexPage;
