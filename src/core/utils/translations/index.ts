// Pages
import dashboardTranslations from './pages/dashboard';
import settingsTranslations from './pages/settings/settings';
import signupTranslations from './pages/signup';
import signinTranslations from './pages/signin';
import homeTranslations from './pages/home';
import profileTranslations from './pages/profile';
import billingTranslations from './pages/settings/billing';
import notificationsTranslations from './pages/settings/notifications';
import accountTranslations from './pages/settings/account';
import messagesTranslations from './pages/messages';
// Components
import asideTranslations from './components/Aside/aside';
import navbarTranslations from './components/Navbar/navbar';
import formTranslations from './components/Form/form';
// General
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
    profileTranslations.en,
    billingTranslations.en,
    notificationsTranslations.en,
    accountTranslations.en,
    messagesTranslations.en,
    formTranslations.en,
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
    profileTranslations.ar,
    billingTranslations.ar,
    notificationsTranslations.ar,
    accountTranslations.ar,
    messagesTranslations.ar,
    formTranslations.ar,
  ),
};

/*
  Other translations are to be added as arguments to .assign()
  i.e. Object.assign({}, homeTranslations.en, loginTranslations.en)
*/

export default allTranslations;
