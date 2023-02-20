import axios from 'axios';

const Axios = axios.create({
  // baseURL: localhost,
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Axios.interceptors.request.use(
//   (config) => {
//
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

Axios.interceptors.response.use(
  (response) => {
    //  ...
    return response;
  },
  (error) => {
    //  ...
    return Promise.reject(error);
  }
);

export class HttpClient {
  static async get<T>({ url, params }: { url: string; params?: unknown }) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }
}
