/* eslint-disable no-useless-catch */
import apiservice from './api.service';

const productsService = {
  post: async (body: object) => {
    try {
      const response = await apiservice.post('product', body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  //   post2: async (body: object) => {
  //     try {
  //       const response = await axiosClient.post(`${base_url}/products`, body, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //         ...axiosConfig,
  //       });
  //       return response.data;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },

  get: async () => {
    try {
      const response = await apiservice.get('product');
      return response;
    } catch (error) {
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const response = await apiservice.get(`product/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  put: async (id: string, body: object) => {
    try {
      const response = await apiservice.put(`product/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const response = await apiservice.remove(`product/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  removeAll: async (ids: []) => {
    try {
      const response = await apiservice.post('product/remove-all', ids);
      return response;
    } catch (error) {
      throw error;
    }
  },

  patch: async (id: string, body: object) => {
    try {
      const response = await apiservice.put(`product/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  search: async (query: string) => {
    try {
      const response = await apiservice.get(`product/search/${query}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default productsService;
