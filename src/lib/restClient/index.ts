import fetch, { RequestInit } from 'node-fetch';

export class RestClient {
  options: any;
  baseUrl: string;

  constructor(baseUrl?: string, options?: RequestInit) {
    this.baseUrl = baseUrl;
    this.options = options;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setOptions(options: RequestInit) {
    this.options = { ...this.options, ...options };
  }

  async callGet(path?: string) {
    const response = await fetch(this.baseUrl + path, this.options);
    const body = await response.json();
    return { response, body };
  }
}
