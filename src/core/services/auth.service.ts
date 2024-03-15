import apiservice from './api.service';

const authservice = {
  register: async (body: any) => {
    try {
      const response = await apiservice.post('auth/register', body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  login: async (body: any) => {
    try {
      const response = await apiservice.post('auth/login', body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  logout: async (body: any) => {
    try {
      const response = await apiservice.post('auth/logout', body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  tokens: async (body: any) => {
    try {
      const response = await apiservice.post('auth/tokens', body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  forgotPassword: async (body: any) => {
    try {
      const response = await apiservice.post('auth/forgot-password', body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  resetPassword: async (body: any) => {
    try {
      const response = await apiservice.post('auth/reset-password', body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  verifyEmail: async (body: any) => {
    try {
      const response = await apiservice.post('auth/verify-email', body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  sendVerificationEmail: async (body: any) => {
    try {
      const response = await apiservice.post(
        'auth/send-verification-email',
        body,
      );
      return response;
    } catch (error) {
      throw error;
    }
  },

  changePassword: async (body: any) => {
    try {
      const response = await apiservice.patch(`auth/change-password`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default authservice;
