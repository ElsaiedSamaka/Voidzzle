import classNames from "classnames";
import { useThemeContext } from "core/context/ThemeContext";
import useTranslation from "core/hooks/useTranslation";
import getDirection from "core/utils/translations/getDirections";
import Validators from "core/validators";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormStateContext } from "shared/Forms/shared/FormContext";
import { RootState } from "core/store";

import {
  LanguageSwitcher,
  ThemeSwitcher,
  LightDecortor,
  DarkDecorator,
  Form,
  XYZ
} from "shared";
import { useSelector, useDispatch } from "react-redux";
import { registerThunk } from "core/store/user/user.thunk";

const Signup = () => {
  const router = useRouter();
  const { locale } = router;
  const { theme } = useThemeContext();
  const { mode } = theme;
  const { t } = useTranslation(locale);
  const { state } = useFormStateContext();
  const {
    formState: { errors, isValid, isDirty, isSubmitting },
    formValue,
  } = state;

  const userSlice = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  // console.log("userSlice", userSlice);
  console.log("form state", state);
  const formFields = [
    {
      name: "firstname",
      label: "firstname",
      id: "firstname",
      type: "text",
      required: true,
      maxLength: 20,
      minLength: 5,
      validation: [
        {
          isName: (val) => {
            if (val === "admin") {
              return "Enter a different firstname";
            }
          },
        },
      ],
    },
    {
      name: "lastname",
      label: "lastname",
      id: "lastname",
      type: "text",
      required: true,
      maxLength: 20,
      minLength: 5,
      validation: [
        {
          isName: (val) => {
            if (val === "admin") {
              return "Enter a different lastname";
            }
          },
        },
      ],
    },
    {
      name: "email",
      label: "email",
      id: "email",
      type: "email",
      required: true,
      maxLength: 40,
      minLength: 5,
      validation: [
        {
          isEmail: (val: string) => {
            Validators.email(val);
          },
        },
      ],
    },
    {
      name: "password",
      id: "password",
      label: "password",
      type: "password",
      required: true,
      maxLength: 40,
      minLength: 8,
      validation: [
        {
          isPassword: (val: string) => {
            const isValidPassword = Validators.password(val);
            if (!isValidPassword) {
              return "Not valid password";
            }
          },
        },
      ],
    },
    {
      name: "passwordConfirmation",
      label: "passwordConfirmation",
      id: "passwordConfirmation",
      type: "password",
      required: true,
      maxLength: 40,
      minLength: 8,
      validation: [
        {
          isPasswordConfirmationMatch: (val: string, form: any) => {
            const isMatch = Validators.passwordConfirmation(
              val,
              form.passwordConfirmation
            );
            if (!isMatch) {
              return "passwordConfirmation doesnot match password";
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

  return (
    <>
      <Head>
        <title>{t("signup.title")}</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
        <div
          dir={getDirection(locale)}
          className={classNames("p-10 w-screen h-screen absolute z-10", {
            "text-light-textPrimary": mode === "light",
            "text-dark-textSecondary": mode === "dark",
          })}
        >
          <div
            className={classNames(
              "flex relative h-[99%] rounded-xl border flex-col md:flex-row md:pr-10 backdrop-blur",
              {
                "border-light-border": mode === "light",
                "border-dark-border": mode === "dark",
              }
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error ea voluptates sapiente!
                </p>
                <div className="">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                      alt=""
                    />
                    <p className="ml-4 w-56">
                      <strong className="block font-medium">Lorem ipsum</strong>
                      <span className="text-xs text--200">
                        {" "}
                        Published 12 Bestsellers{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-4 py-20 z-10">
              <h2 className="mb-2 text-3xl font-bold">{t("signup.name")}</h2>
              <div className="mb-10 block font-bold text--600">
                {t("signup.have an account ?")}
                <Link href="/auth/signin">
                  <span className="hover:underline">{t("signup.Sign In")}</span>
                </Link>
              </div>
              <p className="mb-1 font-medium text--500">
                {t("signup.Sign as?")}
              </p>
              <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
                <div className="relative flex w-56 items-center justify-center rounded-xl bg--50 px-4 py-3 font-medium text--700">
                  <input
                    className="peer hidden"
                    type="radio"
                    name="radio"
                    id="radio1"
                    defaultChecked
                  />
                  <label
                    className="peer-checked:border-red-600 peer-checked:bg-red-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                    htmlFor="radio1"
                  >
                    {" "}
                  </label>
                  <div className="peer-checked:border-transparent peer-checked:bg-red-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border--300 bg--200 ring-red-600 ring-offset-2" />
                  <span className="pointer-events-none z-10">
                    {t("signup.Seller")}
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
                    className="peer-checked:border-red-600 peer-checked:bg-red-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                    htmlFor="radio3"
                  >
                    {" "}
                  </label>
                  <div className="peer-checked:border-transparent peer-checked:bg-red-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border--300 bg--200 ring-red-600 ring-offset-2" />
                  <span className="pointer-events-none z-10">
                    {t("signup.Customer")}
                  </span>
                </div>
              </div>
              <Form formFields={formFields} defaultValues={defaultValues}>
                <button
                  className={classNames(
                    "hover:shadow-red-600/40 rounded-xl px-8 py-3 font-bold transition-all hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed",
                    {
                      "bg-dark-primary disabled:bg-dark-bgDisabled":
                        mode === "dark",
                      "bg-light-primary disabled:bg-light-bgDisabled":
                        mode === "light",
                    }
                  )}
                  disabled={!isValid || !isDirty}
                  type="submit"
                  onClick={() => {
                    handleDispatch();
                  }}
                >
                  {t("signup.Sign Up")}
                </button>
              </Form>
          </div>
          <div>
            <XYZ />
          </div>
            <div className="absolute inline-flex items-center ltr:right-5 top-5 rtl:left-5">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        {mode === "light" && <LightDecortor />}
        {mode === "dark" && <DarkDecorator />}
    </>
  );
};

export default Signup;
