export interface IRequestConfig {
  params?: any;
  headers?: any;
}

export interface IAuthenticationData {
  accessToken: string;
}

export default interface IHTTPProvider {
  authentication: IAuthenticationData | null;

  delete<T = unknown>(path: string, config?: IRequestConfig): Promise<T>;
  get<T = unknown>(path: string, config?: IRequestConfig): Promise<T>;
  patch<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T>;
  post<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T>;
  put<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T>;
}
