import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // If page layout is available, use it. Else return the page
  const getLayout = Component.getLayout || ((page) => page);
  console.log("getLayout", getLayout);
  // if it does we call it with the page and if it not then we return the page as it is
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
