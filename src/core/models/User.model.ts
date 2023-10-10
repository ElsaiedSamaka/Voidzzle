export type User = {
  id: number;
  email: string;
  phonenumber?: number;
  birthdate?: Date;
  address?: string;
  password: string;
  user_img?: string;
  passwordConfirmation: string;
  firstname: string;
  lastname: string;
  socketId?: number;
};
