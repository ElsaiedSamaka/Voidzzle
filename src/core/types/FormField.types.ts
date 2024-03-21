export type FormField = {
  name: string;
  id: string;
  type: string;
  label: string;
  pattern?: RegExp;
  required: boolean;
  maxLength: number;
  minLength: number;
  placholder?: string;
  validation?: {
    [key: string]: (val: string, form) => string | void | undefined;
  }[];
};