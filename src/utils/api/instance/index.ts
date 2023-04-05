import type { AxiosInstance } from 'axios';
import axios from 'axios';

interface ApiConstructorParams {
  baseUrl: string;
}

export class API {
  public baseUrl?: string;

  public request: AxiosInstance;

  constructor(options: ApiConstructorParams) {
    this.baseUrl = options.baseUrl;
    this.request = axios.create({
      baseURL: options.baseUrl,
      timeout: 1000,
      headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
    });
  }
}

export const strapiApi = new API({ baseUrl: 'http://localhost:1337/api' });
