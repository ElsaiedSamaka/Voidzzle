import apiservice from "./api.service";

const authservice = {
  post: async (body: any) => {
    try {
      const response = await apiservice.post("auth", body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  //   post2: async (body: any) => {
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
      const response = await apiservice.get("auth");
      return response;
    } catch (error) {
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const response = await apiservice.get(`auth/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  put: async (id: string, body: any) => {
    try {
      const response = await apiservice.put(`auth/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const response = await apiservice.remove(`auth/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  patch: async (id: string, body: any) => {
    try {
      const response = await apiservice.put(`auth/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default authservice;
