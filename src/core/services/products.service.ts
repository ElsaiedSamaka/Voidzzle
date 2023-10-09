import apiservice from "./api.service";

const productsService = {
  post: async (body: any) => {
    try {
      const response = await apiservice.post("products", body);
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
      const response = await apiservice.get("products");
      return response;
    } catch (error) {
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const response = await apiservice.get(`products/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  put: async (id: string, body: any) => {
    try {
      const response = await apiservice.put(`products/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const response = await apiservice.remove(`products/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  patch: async (id: string, body: any) => {
    try {
      const response = await apiservice.put(`products/${id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default productsService;
