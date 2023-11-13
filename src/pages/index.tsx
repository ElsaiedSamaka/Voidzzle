import Head from "next/head";
import { Provider } from "react-redux";
import { HomeLayout } from "shared";
import RootLayout from "shared/Layouts/RootLayout/RootLayout";
import Home from "./home";
import useTranslation from "core/hooks/useTranslation";
import { useRouter } from "next/router";
const IndexPage = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);
  return (
    <>
      <Head>
        <title>{t("home.title")}</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <main className="main">
        <Home />
      </main>
    </>
  );
};

IndexPage.getLayout = (page) => {
  return (
    <RootLayout>
      <HomeLayout>{page}</HomeLayout>
    </RootLayout>
  );
};

export default IndexPage;
