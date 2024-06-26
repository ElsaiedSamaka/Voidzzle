/* eslint-disable @typescript-eslint/no-unused-vars */
// Packages
import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// Components
import {
  LanguageSwitcher,
  ThemeSwitcher,
  LightDecortor,
  DarkDecorator,
  Form,
  Toast,
} from 'shared';
// Hooks & services
import { useThemeContext } from 'core/context/ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormStateContext } from 'shared/Forms/shared/FormContext';
// Core
import useTranslation from 'core/hooks/useTranslation';
import getDirection from 'core/utils/translations/getDirections';
import { loginThunk } from 'core/store/auth/user.thunk';
import Validators from 'core/validators';
import { RootState } from 'core/store';

const Signin = () => {
  const router = useRouter();
  const { locale } = router;
  const { theme } = useThemeContext();
  const { mode } = theme;
  const { t } = useTranslation(locale);
  const { state } = useFormStateContext();
  const [showToast, toggleToast] = useState(false);

  const {
    formState: { errors, isValid, isDirty, isSubmitting },
    formValue,
  } = state;

  const userSlice = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const formFields = [
    {
      name: 'email',
      label: 'form.email',
      id: 'email',
      type: 'email',
      required: true,
      maxLength: 40,
      minLength: 5,
      validation: [
        {
          isEmail: (val: string) => {
            const isValidEmail = Validators.isEmail(val);
            if (!isValidEmail) {
              return 'Valid email is like example@mail.com';
            }
          },
        },
      ],
    },
    {
      name: 'password',
      id: 'password',
      label: 'form.password',
      type: 'password',
      required: true,
      maxLength: 20,
      minLength: 8,
      validation: [
        {
          isPassword: (val: string) => {
            const isValidPassword = Validators.password(val);
            if (!isValidPassword) {
              return 'Not valid password';
            }
          },
        },
      ],
    },
  ];

  const defaultValues = {};
  // Methods
  function handleLoginDispatch(): void {
    dispatch(loginThunk(formValue));
  }
  // Listen for changes in the Redux store
  useEffect(() => {
    if (userSlice.error) {
      toggleToast(true);
    } else if (userSlice.user) {
      console.log('Login success. Redirecting to home.');
      router.push('/');
    }
  }, [userSlice.error, userSlice.user]);

  return (
    <>
      <Head>
        <title>{t('signin.title')}</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <div
        dir={getDirection(locale)}
        className={classNames('p-10 w-screen h-screen absolute z-10', {
          'text-light-textPrimary': mode === 'light',
          'text-dark-textSecondary': mode === 'dark',
        })}
      >
        <div
          className={classNames(
            'flex relative h-[99%] rounded-xl border flex-col md:flex-row md:pr-10 backdrop-blur',
            {
              'border-light-border': mode === 'light',
              'border-dark-border': mode === 'dark',
            },
          )}
        >
          <div className="max-w-md rounded-3xl bg-gradient-to-t from-red-500 via-red-700 to-red-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
            <p className="mb-20 font-bold tracking-wider">Voidzzle</p>
            <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
              Start your <br />
              journey with us
            </p>
            <p className="mb-28 leading-relaxed text--200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              nisi voluptas a officia. Omnis.
            </p>
            <div className="bg-red-600/80 rounded-2xl px-4 py-8">
              <p className="mb-3 text--200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                ea voluptates sapiente!
              </p>
              <div className="">
                <div className="flex items-center">
                  <Image
                    className="h-10 w-10 rounded-full object-cover"
                    src=""
                    width={10}
                    height={10}
                    alt=""
                  />
                  <p className="ml-4 w-56">
                    <strong className="block font-medium">Lorem ipsum</strong>
                    <span className="text-xs text--200">
                      {' '}
                      Published 12 Bestsellers{' '}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 px-4 py-20 z-10">
            <h2 className="mb-2 text-3xl font-bold">{t('signin.name')}</h2>
            <div className="mb-10 block font-bold text--600">
              {t("signin.don't have an account ?")}
              <Link href="/auth/signup">
                <span className="underline hover:text-red-500">
                  {t('signin.Sign Up')}
                </span>
              </Link>
            </div>

            <Form formFields={formFields} defaultValues={defaultValues}>
              <button
                className={classNames(
                  'hover:shadow-red-600/40 rounded-xl px-8 py-3 font-bold transition-all hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed',
                  {
                    'bg-dark-primary disabled:bg-dark-bgDisabled':
                      mode === 'dark',
                    'bg-light-primary disabled:bg-light-bgDisabled':
                      mode === 'light',
                  },
                )}
                disabled={!isValid}
                type="submit"
                onClick={() => {
                  handleLoginDispatch();
                }}
              >
                {t('signin.Sign In')}
              </button>
            </Form>
          </div>
          <div className="absolute inline-flex items-center ltr:right-5 top-5 rtl:left-5">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      {showToast && <Toast type="error" message={userSlice.error} />}

      {mode === 'light' && <LightDecortor />}
      {mode === 'dark' && <DarkDecorator />}
    </>
  );
};

export default Signin;
