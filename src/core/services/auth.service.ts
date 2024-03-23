/* eslint-disable no-useless-catch */
import apiservice from './api.service';

const authservice = {
  register: async (body: object) => {
    try {
      const response = await apiservice.post('auth/register', body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  login: async (body: object) => {
    try {
      const response = await apiservice.post('auth/login', body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  logout: async (body: string) => {
    try {
      const response = await apiservice.post('auth/logout', body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  tokens: async (body: object) => {
    try {
      const response = await apiservice.post('auth/tokens', body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  forgotPassword: async (body: object) => {
    try {
      const response = await apiservice.post('auth/forgot-password', body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  resetPassword: async (body: object) => {
    try {
      const response = await apiservice.post('auth/reset-password', body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  verifyEmail: async (body: object) => {
    try {
      const response = await apiservice.post('auth/verify-email', body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  sendVerificationEmail: async (body: object) => {
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

  changePassword: async (body: object) => {
    try {
      const response = await apiservice.patch(`auth/change-password`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default authservice;
