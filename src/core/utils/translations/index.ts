import dashboardTranslations from './pages/dashboard';
import settingsTranslations from './pages/settings';
import signupTranslations from './pages/signup';
import signinTranslations from './pages/signin';
import homeTranslations from './pages/home';
import asideTranslations from './components/Aside/aside';
import navbarTranslations from './components/Navbar/navbar';
import generalTranslations from './shared/general';

const allTranslations = {
  en: Object.assign(
    {},
    dashboardTranslations.en,
    settingsTranslations.en,
    signupTranslations.en,
    signinTranslations.en,
    asideTranslations.en,
    navbarTranslations.en,
    homeTranslations.en,
    generalTranslations.en,
  ),
  ar: Object.assign(
    {},
    dashboardTranslations.ar,
    settingsTranslations.ar,
    signupTranslations.ar,
    signinTranslations.ar,
    asideTranslations.ar,
    navbarTranslations.ar,
    homeTranslations.ar,
    generalTranslations.ar,
  ),
};

/*
  Other translations are to be added as arguments to .assign()
  i.e. Object.assign({}, homeTranslations.en, loginTranslations.en)
*/

export default allTranslations;
