import Head from "next/head";
import { Provider } from "react-redux";
import { HomeLayout } from "shared";
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
        <main className="bg-green-400">
          <span className="text-white">inside the main of (index.tsx)</span>
          {/* <Dashboard /> */}
          <Home />
          {/* <NewLetter /> */}
          {/* <Settings /> */}
        </main>
      </Provider>
    </>
  );
};

IndexPage.getLayout = (page) => {
  console.log("IndexPage.getLayout");
  return (
    <RootLayout>
      <HomeLayout>{page}</HomeLayout>
    </RootLayout>
  );
};

export default IndexPage;
