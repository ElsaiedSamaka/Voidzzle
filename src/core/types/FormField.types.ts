import { Validate } from 'react-hook-form';

type SelectOption = {
  label: string;
  value: string;
};

export type FormField = {
  name: string;
  id: string;
  type: string;
  label: string;
  options?: SelectOption[];
  pattern?: RegExp;
  required: boolean;
  maxLength: number;
  minLength: number;
  placholder?: string;
  validation?:
    | {
        [key: string]: (val: string, form: any) => string | void | undefined;
      }[]
    | Validate<never, object>;
};
