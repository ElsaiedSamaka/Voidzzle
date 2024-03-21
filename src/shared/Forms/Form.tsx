/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './Form.module.css';

import { Fragment, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import { useFormStateContext } from './shared/FormContext';
import { useThemeContext } from 'core/context/ThemeContext';
import { useTranslation } from 'core/context/TranslationContext';

import { isEqual } from 'core/helper';
import Switch from 'shared/Common/Switch/Switch';
import { FormField } from 'core/types';

interface IFromProps {
  defaultValues: object;
  formFields: FormField[];
  children?: React.ReactNode;
}
interface Errors {
  [fieldName: string]: {
    type: string | number;
    message: string;
  };
}


const Form = ({ defaultValues, formFields, children }: IFromProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState,
    reset,
    getValues,
    watch,
  } = useForm({
    defaultValues,
    mode: 'onBlur',
  });
  const { errors, isValid, isDirty, isSubmitting } = formState;
  const { state, dispatch } = useFormStateContext();
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const { mode } = theme;

  const formValues = getValues(); // Use watch to get the form field values
  const previousFormValues = useRef(formValues); // Track previous form values

  const [passwordType, togglePassword] = useState('password');
  const [passwordConfirmationType, togglePasswordConfirmation] = useState('password')

  function handlePasswordToggle(type: string) {
    togglePassword(type);
  }

  function handPasswordConfirmation(type: string){
    togglePasswordConfirmation(type)
  }
  const submit = (formData: any) => {
    dispatch({
      type: 'SUBMIT',
      formState: {
        errors: errors,
        isValid: isValid,
        isDirty: isDirty,
        isSubmitting: true,
      },
    });
  };
  const temp = 1 + 1;
  console.log(temp);

  useEffect(() => {
    const hasFormValuesChanged = !isEqual(
      formValues,
      previousFormValues.current,
    );

    if (hasFormValuesChanged) {
      previousFormValues.current = formValues;
      handleChange();
    }
    return () => {
      handleChange;
    };
  }, [formValues, errors, isValid, isDirty, isSubmitting]);

  function handleChange() {
    dispatch({
      type: 'CHANGE',
      formState: {
        errors: errors,
        isValid: isValid,
        isDirty: isDirty,
        isSubmitting: isSubmitting,
      },
      formValue: {
        ...formValues,
      },
    });
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className={classNames('mt-2 flex flex-col w-full h-fit', {
          'text-dark-textSecondary': mode === 'dark',
          'text-light-textSecondary': mode === 'light',
        })}
      >
        {/* Form fields */}
        <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-4">
          {formFields.map((field, i) => {
            return (
              <Fragment key={field.id}>
                {field.type == 'text' && (
                  <div
                    key={field.id}
                    className="input flex flex-col w-full font-semibold group col-span-2"
                  >
                    {field.label && (
                      <label className="capitalize" htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}
                    <input
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                      type={field.type}
                      {...register(field.name as never, {
                        required: {
                          value: field.required,
                          message: 'this is a required field',
                        },
                        pattern: {
                          value: field.pattern as RegExp,
                          message: `a required valid pattern is ${field.pattern}`,
                        },
                        maxLength: {
                          value: field.maxLength,
                          message: 'maxLength is ' + field.maxLength,
                        },
                        minLength: {
                          value: field.minLength,
                          message: 'minLength is ' + field.minLength,
                        },
                        validate: (field.validation as any[])?.reduce(
                          (acc: any, validator: any) => {
                            return {
                              ...acc,
                              ...validator,
                            };
                          },
                          {},
                        ),
                      })}
                    />
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'date' && (
                  <div
                    key={field.id}
                    className="input flex flex-col w-full font-semibold group col-span-2"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}
                    <input
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                      type={field.type}
                      {...register(field.name as never, {
                        required: {
                          value: field.required,
                          message: 'this is a required field',
                        },
                        pattern: {
                          value: field.pattern as RegExp,
                          message: `a required valid pattern is ${field.pattern}`,
                        },
                        maxLength: {
                          value: field.maxLength,
                          message: `maxLength is ${field.maxLength}`,
                        },
                        minLength: {
                          value: field.minLength,
                          message: `minLength is ${field.minLength}`,
                        },
                        validate: (field.validation as any[])?.reduce(
                          (acc: any, validator: any) => {
                            return {
                              ...acc,
                              ...validator,
                            };
                          },
                          {},
                        ),
                      })}
                    />
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'checkbox' && (
                  <div
                    key={field.id}
                    className="input flex flex-col w-full font-semibold group"
                  >
                    <label className={styles.checkboxbtn}>
                      <label htmlFor={t(field.label)}>{t(field.label)}</label>
                      <input id={field.id} type={field.type} />
                      <span className={styles.checkmark}></span>
                    </label>
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'select' && (
                  <div
                    key={field.id}
                    className="input flex flex-col w-full font-semibold group col-span-2"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}
                    <select
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                      {...register(field.name as never, {
                        required: {
                          value: field.required,
                          message: 'this is a required field',
                        },
                        pattern: {
                          value: field.pattern as RegExp,
                          message: `a required valid pattern is ${field.pattern}`,
                        },
                        maxLength: {
                          value: field.maxLength,
                          message: `maxLength is ${field.maxLength}`,
                        },
                        minLength: {
                          value: field.minLength,
                          message: `minLength is ${field.minLength}`,
                        },
                        validate: (field.validation as any[])?.reduce(
                          (acc: any, validator: any) => {
                            return {
                              ...acc,
                              ...validator,
                            };
                          },
                          {},
                        ),
                      })}
                    >
                      <option selected>Select</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'text-area' && (
                  <div
                    key={field.id}
                    className="input flex flex-col w-full font-semibold group col-span-2"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}

                    <textarea
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                    ></textarea>
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'password' && (
                  <div
                    key={field.id}
                    className="password-input relative flex flex-col w-full font-semibold group col-span-full "
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}
                    <input
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                      type={passwordType}
                      {...register(field.name as never, {
                        required: {
                          value: field.required,
                          message: 'this is a required field',
                        },
                        pattern: {
                          value: field.pattern as RegExp,
                          message: `a required valid pattern is ${field.pattern}`,
                        },
                        maxLength: {
                          value: field.maxLength,
                          message: `maxLength is ${field.maxLength}`,
                        },
                        minLength: {
                          value: field.minLength,
                          message: `minLength is ${field.minLength}`,
                        },
                        validate: (field.validation as any[])?.reduce(
                          (acc: any, validator: any) => {
                            return {
                              ...acc,
                              ...validator,
                            };
                          },
                          {},
                        ),
                      })}
                    />
                    <span className="absolute w-full bottom-2.5 ltr:right-5 rtl:left-5">
                      <Switch testCase={passwordType}>
                        <svg
                          onClick={() => {
                            handlePasswordToggle('text');
                          }}
                          id="password"
                          className="w-5 h-5 text-gray-400 hover:cursor-pointer ltr:ml-auto rtl:mr-auto"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <svg
                          onClick={() => {
                            handlePasswordToggle('password');
                          }}
                          id="text"
                          className="w-5 h-5 text-gray-400 ltr:ml-auto rtl:mr-auto hover:cursor-pointer"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      </Switch>
                    </span>
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'passwordConfirmation' && (
                  <div
                    key={field.id}
                    className="passwordConfirmation-input relative flex flex-col w-full font-semibold group col-span-full "
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}
                    <input
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                      type={passwordConfirmationType}
                      {...register(field.name as never, {
                        required: {
                          value: field.required,
                          message: 'this is a required field',
                        },
                        pattern: {
                          value: field.pattern as RegExp,
                          message: `a required valid pattern is ${field.pattern}`,
                        },
                        maxLength: {
                          value: field.maxLength,
                          message: `maxLength is ${field.maxLength}`,
                        },
                        minLength: {
                          value: field.minLength,
                          message: `minLength is ${field.minLength}`,
                        },
                        validate: (field.validation as any[])?.reduce(
                          (acc: any, validator: any) => {
                            return {
                              ...acc,
                              ...validator,
                            };
                          },
                          {},
                        ),
                      })}
                    />
                    <span className="absolute w-full bottom-2.5 ltr:right-5 rtl:left-5">
                      <Switch testCase={passwordConfirmationType}>
                        <svg
                          onClick={() => {
                            handPasswordConfirmation('text');
                          }}
                          id="password"
                          className="w-5 h-5 text-gray-400 ltr:ml-auto rtl:mr-auto hover:cursor-pointer mr-auto"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <svg
                          onClick={() => {
                            handPasswordConfirmation('password');
                          }}
                          id="text"
                          className="w-5 h-5 text-gray-400 ltr:ml-auto rtl:mr-auto hover:cursor-pointer"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      </Switch>
                    </span>
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'file' && (
                  <div
                    key={field.id}
                    className="flex flex-col items-start justify-center w-full col-span-2"
                  >
                    <label className="capitalize  font-semibold">
                      {t(field.label)}
                    </label>
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 ">
                          <span className="font-semibold">Click to upload</span>{' '}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 ">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
                {field.type == 'radio' && (
                  <div
                    key={field.id}
                    className="input flex flex-col w-full font-semibold group"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}
                    <input
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                      type={field.type}
                      {...register(field.name as never, {
                        required: {
                          value: field.required,
                          message: 'this is a required field',
                        },
                        pattern: {
                          value: field.pattern as RegExp,
                          message: `a required valid pattern is ${field.pattern}`,
                        },
                        maxLength: {
                          value: field.maxLength,
                          message: `maxLength is ${field.maxLength}`,
                        },
                        minLength: {
                          value: field.minLength,
                          message: `minLength is ${field.minLength}`,
                        },
                        validate: (field.validation as any[])?.reduce(
                          (acc: any, validator: any) => {
                            return {
                              ...acc,
                              ...validator,
                            };
                          },
                          {},
                        ),
                      })}
                    />
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'tel' && (
                  <div
                    key={field.id}
                    className="input flex flex-col w-full font-semibold group"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}
                    <input
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                      type={field.type}
                      {...register(field.name as never, {
                        required: {
                          value: field.required,
                          message: 'this is a required field',
                        },
                        pattern: {
                          value: field.pattern as RegExp,
                          message: `a required valid pattern is ${field.pattern}`,
                        },
                        maxLength: {
                          value: field.maxLength,
                          message: `maxLength is ${field.maxLength}`,
                        },
                        minLength: {
                          value: field.minLength,
                          message: `minLength is ${field.minLength}`,
                        },
                        validate: (field.validation as any[])?.reduce(
                          (acc: any, validator: any) => {
                            return {
                              ...acc,
                              ...validator,
                            };
                          },
                          {},
                        ),
                      })}
                    />
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'range' && (
                  <div
                    key={field.id}
                    className="input flex flex-col w-full font-semibold group"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}
                    <input
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                      type={field.type}
                      {...register(field.name as never, {
                        required: {
                          value: field.required,
                          message: 'this is a required field',
                        },
                        pattern: {
                          value: field.pattern as RegExp,
                          message: `a required valid pattern is ${field.pattern}`,
                        },
                        maxLength: {
                          value: field.maxLength,
                          message: `maxLength is ${field.maxLength}`,
                        },
                        minLength: {
                          value: field.minLength,
                          message: `minLength is ${field.minLength}`,
                        },
                        validate: (field.validation as any[])?.reduce(
                          (acc: any, validator: any) => {
                            return {
                              ...acc,
                              ...validator,
                            };
                          },
                          {},
                        ),
                      })}
                    />
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'email' && (
                  <div
                    key={field.id}
                    className="email-input flex flex-col w-full font-semibold group col-span-full "
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}
                    <input
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                      type={field.type}
                      {...register(field.name as never, {
                        required: {
                          value: field.required,
                          message: 'this is a required field',
                        },
                        pattern: {
                          value: field.pattern as RegExp,
                          message: `a required valid pattern is ${field.pattern}`,
                        },
                        maxLength: {
                          value: field.maxLength,
                          message: `maxLength is ${field.maxLength}`,
                        },
                        minLength: {
                          value: field.minLength,
                          message: `minLength is ${field.minLength}`,
                        },
                        validate: (field.validation as any[])?.reduce(
                          (acc: any, validator: any) => {
                            return {
                              ...acc,
                              ...validator,
                            };
                          },
                          {},
                        ),
                      })}
                    />
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
                {field.type == 'number' && (
                  <div
                    key={field.id}
                    className="input flex flex-col w-full font-semibold group"
                  >
                    {field.label && (
                      <label className="capitalize " htmlFor={field.name}>
                        {t(field.label)}
                      </label>
                    )}
                    <input
                      className={classNames(
                        'p-2 rounded-md border font-normal',
                        {
                          'border-red-500':
                            errors[field.name as keyof typeof errors],
                        },
                        {
                          'bg-dark-bgSecondary text-dark-textSecondary border-dark-border hover:bg-zinc-800':
                            mode === 'dark',
                          'bg-light-bgSecondary text-light-textSecondary border-light-border hover:bg-gray-100':
                            mode === 'light',
                        },
                      )}
                      id={field.id}
                      type={field.type}
                      placeholder={field.placholder}
                      {...register(field.name as never, {
                        required: {
                          value: field.required,
                          message: 'this is a required field',
                        },
                        pattern: {
                          value: field.pattern as RegExp,
                          message: `a required valid pattern is ${field.pattern}`,
                        },
                        maxLength: {
                          value: field.maxLength,
                          message: `maxLength is ${field.maxLength}`,
                        },
                        minLength: {
                          value: field.minLength,
                          message: `minLength is ${field.minLength}`,
                        },
                        validate: (field.validation as any[])?.reduce(
                          (acc: any, validator: any) => {
                            return {
                              ...acc,
                              ...validator,
                            };
                          },
                          {},
                        ),
                      })}
                    />
                    {errors[field.name as keyof typeof errors] && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 px-1 rounded-full text-center w-fit absolute left-[12%] bg-white border border-red-500">
                        {errors[field.name as keyof typeof errors]?.message}
                      </span>
                    )}
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
        {/* Form fields */}

        {/* Buttons */}
        <div className="flex mr-auto gap-x-2">{children}</div>
        {/* Buttons */}
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default Form;

// const handleSetName = () => {
//   setValue("name", "test", {
//     shouldValidate: true,
//     shouldDirty: true,
//   });
// };

//  <button type="button" onClick={handleReset}>
//    reset
//  </button>;

// const { fields, append, remove } = useFieldArray({
//   name: "array",
//   control,
// });

//  {
//    /* Dynamic fields */
//  }
//  {
//    fields.map((field, i) => (
//      <div key={field.id}>
//        <input
//          type="number"
//          id={`price_${i}`}
//          placeholder="$2999"
//          {...register(`array.${i}.field`, {
//            valueAsNumber: true,
//            required: {
//              value: true,
//              message: "price is required",
//            },
//            validate: {
//              notZero: (val) => {
//                if (val === 0) {
//                  return "price cannot be zero";
//                }
//              },
//            },
//          })}
//        />
//        {i > 0 && (
//          <button type="button" onClick={() => remove(i)}>
//            remove
//          </button>
//        )}
//      </div>
//    ));
//  }
//  <button type="button" onClick={() => append({ field: null })}>
//    add
//  </button>;
//  {
//    /* Dynamic fields */
//  }

// Form.propTypes = {
//   // You can declare that a prop is a specific JS primitive. By default, these
//   // are all optional.
//   optionalArray: PropTypes.array,
//   optionalBigInt: PropTypes.bigint,
//   optionalBool: PropTypes.bool,
//   optionalFunc: PropTypes.func,
//   optionalNumber: PropTypes.number,
//   optionalObject: PropTypes.object,
//   optionalString: PropTypes.string,
//   optionalSymbol: PropTypes.symbol,

//   // Anything that can be rendered: numbers, strings, elements or an array
//   // (or fragment) containing these types.
//   // see https://reactjs.org/docs/rendering-elements.html for more info
//   optionalNode: PropTypes.node,

//   // A React element (ie. <MyComponent />).
//   optionalElement: PropTypes.element,

//   // A React element type (eg. MyComponent).
//   // a function, string, or "element-like" object (eg. React.Fragment, Suspense, etc.)
//   // see https://github.com/facebook/react/blob/HEAD/packages/shared/isValidElementType.js
//   optionalElementType: PropTypes.elementType,

//   // You can also declare that a prop is an instance of a class. This uses
//   // JS's instanceof operator.
//   // optionalMessage: PropTypes.instanceOf(Message),

//   // You can ensure that your prop is limited to specific values by treating
//   // it as an enum.
//   optionalEnum: PropTypes.oneOf(["News", "Photos"]),

//   // An object that could be one of many types
//   optionalUnion: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     // PropTypes.instanceOf(Message),
//   ]),

//   // An array of a certain type
//   optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

//   // An object with property values of a certain type
//   optionalObjectOf: PropTypes.objectOf(PropTypes.number),

//   // You can chain any of the above with `isRequired` to make sure a warning
//   // is shown if the prop isn't provided.

//   // An object taking on a particular shape
//   optionalObjectWithShape: PropTypes.shape({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.isRequired,
//   }),

//   // An object with warnings on extra properties
//   optionalObjectWithStrictShape: PropTypes.exact({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.isRequired,
//   }),

//   requiredFunc: PropTypes.func.isRequired,

//   // A value of any data type
//   requiredAny: PropTypes.any.isRequired,

//   // You can also specify a custom validator. It should return an Error
//   // object if the validation fails. Don't `console.warn` or throw, as this
//   // won't work inside `oneOfType`.
//   customProp: function (props, propName, componentName) {
//     if (!/matchme/.test(props[propName])) {
//       return new Error(
//         "Invalid prop `" +
//           propName +
//           "` supplied to" +
//           " `" +
//           componentName +
//           "`. Validation failed."
//       );
//     }
//   },
// };
