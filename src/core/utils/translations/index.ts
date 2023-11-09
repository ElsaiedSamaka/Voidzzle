import dashboardTranslations from "./pages/dashboard";
import settingsTranslations from "./pages/settings";
import asideTranslations from "./components/Aside/aside";
import navbarTranslations from "./components/Navbar/navbar";

const allTranslations = {
  en: Object.assign(
    {},
    dashboardTranslations.en,
    settingsTranslations.en,
    asideTranslations.en,
    navbarTranslations.en
  ),
  ar: Object.assign(
    {},
    dashboardTranslations.ar,
    settingsTranslations.ar,
    asideTranslations.ar,
    navbarTranslations.ar
  ),
};

/*
  Other translations are to be added as arguments to .assign()
  i.e. Object.assign({}, homeTranslations.en, loginTranslations.en)
*/

export default allTranslations;
