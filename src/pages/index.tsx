import Head from "next/head";
import { Provider } from "react-redux";
import RootLayout from "shared/Layouts/RootLayout/RootLayout";
import { store } from "../core/store";
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
        <main className="w-full">
          <h1 className="text-5xl font-bold text-gray-900 leading-[1.4] mb-5">
            Demo project
          </h1>
          <p className="text-2xl text-gray-700">Nested layouts in Next.js</p>
        </main>
      </Provider>
    </>
  );
};

IndexPage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>
}

export default IndexPage;
