export type User = {
  id: number;
  phonenumber?: number;
  email: string;
  birthdate?: Date;
  address?: string;
  password: string;
  user_img?: string;
  passwordConfirmation: string;
  firstname: string;
  lastname: string;
  socketId?: number;
};
