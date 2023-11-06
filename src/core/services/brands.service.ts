import apiservice from "./api.service";

const brandsService = {
  post: async (body: any) => {
    try {
      const response = await apiservice.post("brands", body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  get: async () => {
    try {
      const response = await apiservice.get("brands");
      return response;
    } catch (error) {
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const response = await apiservice.get(`brands/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  put: async (id: string, body: any) => {
    try {
      const response = await apiservice.put(`brands/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const response = await apiservice.remove(`brands/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  removeAll: async (ids: any[]) => {
    try {
      const response = await apiservice.post("brands/remove-all", ids);
      return response;
    } catch (error) {
      throw error;
    }
  },

  patch: async (id: string, body: any) => {
    try {
      const response = await apiservice.put(`brands/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  search: async (query: string) => {
    try {
      const response = await apiservice.get(`brands/search/${query}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default brandsService;
