/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useSelector, useDispatch } from 'react-redux';
import { registerThunk } from 'core/store/user/user.thunk';
import { useFormStateContext } from 'shared/Forms/shared/FormContext';
import { useRouter } from 'next/router';
import { useThemeContext } from 'core/context/ThemeContext';
import { useEffect, useState } from 'react';
import useTranslation from 'core/hooks/useTranslation';
// Core
import getDirection from 'core/utils/translations/getDirections';
import Validators from 'core/validators';
import { RootState } from 'core/store';
import { FormField } from 'core/types';

const Signup = () => {
  const router = useRouter();
  const { locale } = router;
  const {
    theme: { mode },
  } = useThemeContext();
  const { t } = useTranslation(locale);
  const { state } = useFormStateContext();
  const [showToast, toggleToast] = useState(false);
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors, isValid, isDirty, isSubmitting },
    formValue,
  } = state;

  const authSlice = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const formFields: FormField[] = [
    {
      name: 'firstname',
      label: 'form.firstname',
      id: 'firstname',
      type: 'text',
      required: true,
      maxLength: 20,
      minLength: 5,
      validation: [
        {
          isName: (val: string) => {
            if (val === 'admin') {
              return 'Enter a different firstname';
            }
          },
        },
      ],
    },
    {
      name: 'lastname',
      label: 'form.lastname',
      id: 'lastname',
      type: 'text',
      required: true,
      maxLength: 20,
      minLength: 5,
      validation: [
        {
          isName: (val: string) => {
            if (val === 'admin') {
              return 'Enter a different lastname';
            }
          },
        },
      ],
    },
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
            Validators.isEmail(val);
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
      maxLength: 40,
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
    {
      name: 'passwordConfirmation',
      label: 'form.passwordconfirmation',
      id: 'passwordConfirmation',
      type: 'passwordConfirmation',
      required: true,
      maxLength: 40,
      minLength: 8,
      validation: [
        {
          isPasswordConfirmationMatch: (val: string, form: any) => {
            const isMatch = Validators.passwordConfirmation(
              val,
              form.passwordConfirmation,
            );
            if (!isMatch) {
              return 'passwordConfirmation doesnot match password';
            }
          },
        },
      ],
    },
  ];

  const defaultValues = {};

  function handleDispatch(): void {
    dispatch(registerThunk(formValue));
  }
  // Listen for changes in the Redux store
  useEffect(() => {
    if (authSlice.error) {
      toggleToast(true);
    } else if (authSlice.user) {
      console.log('Register success. Redirecting to home.');
      router.push('/');
    }
  }, [authSlice.error, authSlice.user]);

  return (
    <>
      <Head>
        <title>{t('signup.title')}</title>
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
          {/* start journey card */}
          <div className="max-w-md rounded-3xl bg-gradient-to-t from-red-500 via-red-700 to-red-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
            <p className="mb-20 font-bold tracking-wider">Voidzzle</p>
            <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
              Start your <br />
              journey with us
            </p>
            <p className="mb-28 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              nisi voluptas a officia. Omnis.
            </p>
            <div className="bg-red-600/80 rounded-2xl px-4 py-8">
              <p className="mb-3">
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
          {/* start journey card */}
          <div className="regteration-form px-4 py-20 z-10">
            <h2 className="mb-2 text-3xl font-bold">{t('signup.name')}</h2>
            <div className="mb-10 block font-bold text--600">
              {t('signup.have an account ?')}
              <Link href="/auth/signin">
                <span className="underline hover:text-red-500">
                  {t('signup.Sign In')}
                </span>
              </Link>
            </div>
            <p className="mb-1 font-medium text--500">{t('signup.Sign as?')}</p>
            <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
              <div className="relative flex w-56 items-center justify-center rounded-xl px-4 py-3 font-medium">
                <input
                  className="peer hidden"
                  type="radio"
                  name="radio"
                  id="radio1"
                  defaultChecked
                />
                <label
                  className="peer-checked:border-red-600 peer-checked:bg-red-200/10 absolute top-0 h-full w-full cursor-pointer rounded-xl border border-gray-100/10"
                  htmlFor="radio1"
                >
                  {' '}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-red-200/10 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300/10 ring-red-600 ring-offset-2" />
                <span className="pointer-events-none z-10">
                  {t('signup.Seller')}
                </span>
              </div>
              <div className="relative flex w-56 items-center justify-center rounded-xl bg--50 px-4 py-3 font-medium text--700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="radio"
                  id="radio3"
                  defaultChecked
                />
                <label
                  className="peer-checked:border-red-600 peer-checked:bg-red-200/10 absolute top-0 h-full w-full cursor-pointer rounded-xl border border-gray-100/10"
                  htmlFor="radio3"
                >
                  {' '}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-red-200/10 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300/10 bg--200 ring-red-600 ring-offset-2" />
                <span className="pointer-events-none z-10">
                  {t('signup.Customer')}
                </span>
              </div>
            </div>
            <Form formFields={formFields} defaultValues={defaultValues}>
              <button
                className={classNames(
                  'hover:shadow-red-800/40 text-white rounded-xl px-8 py-3 font-bold transition-all hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed',
                  {
                    'bg-dark-primary disabled:bg-dark-bgDisabled':
                      mode === 'dark',
                    'bg-light-primary disabled:bg-light-bgDisabled':
                      mode === 'light',
                  },
                )}
                disabled={!isValid || !isDirty}
                type="submit"
                onClick={() => {
                  handleDispatch();
                }}
              >
                {t('signup.Sign Up')}
              </button>
            </Form>
          </div>
          <div className="absolute inline-flex items-center ltr:right-5 top-5 rtl:left-5">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      {showToast && <Toast type="error" message={authSlice.error} />}
      {mode === 'light' && <LightDecortor />}
      {mode === 'dark' && <DarkDecorator />}
    </>
  );
};

export default Signup;
