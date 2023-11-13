export type User = {
  firstname:string;
  lastname: string;
  email: string;
  phone?: number;
  role?:string;
  address?: string;
  companyName?:string;
  password?: string;
  passwordConfirmation?: string;
  profileImage?: string;
  discountCode?: string;
  socketId?: string;
};
