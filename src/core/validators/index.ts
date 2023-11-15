const Validators = {
  email: (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  password: (password: string) => {
    const re = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    return re.test(password);
  },
  number: (number: string) => {
    const re = /^\d+$/;
    return re.test(number);
  },
  name: (name: string) => {
    const re = /^[a-zA-Z ]+$/;
    return re.test(name);
  },
  url: (url: string) => {
    const re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(url);
  },
  date: (date: string) => {
    const re = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    return re.test(date);
  },
  phone: (phone: string) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
  },
  image: (image: string) => {
    const re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(image);
  },
  video: (video: string) => {
    const re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(video);
  },
  file: (file: string) => {
    const re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(file);
  },
  text: (text: string) => {
    const re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(text);
  },
  address: (address: string) => {
    const re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(address);
  },
  passwordConfirmation: (password: string, passwordConfirmation: string) => {
    return password === passwordConfirmation;
  },
  passwordResetToken: (passwordResetToken: string) => {
    const re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(passwordResetToken);
  },
  passwordResetTokenConfirmation: (
    passwordResetToken: string,
    passwordResetTokenConfirmation: string
  ) => {
    return passwordResetToken === passwordResetTokenConfirmation;
  },
  isNotZero: (value: number, field: string) => {
    if (value === 0) {
      return `${field} cannot be zero`;
    }
  },
  isNotNegative: (value: number, field: string) => {
    if (value < 0) {
      return `${field} cannot be negative`;
    }
  },
};
export default Validators;
