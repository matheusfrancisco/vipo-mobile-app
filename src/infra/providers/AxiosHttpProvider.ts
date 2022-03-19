import Http from '@/config/http';
import IHTTPProvider, {
  IAuthenticationData,
  IRequestConfig,
} from '@/domain/providers/IHTTPProvider';
import HttpError from '@/infra/errors/HttpError';

const AUTHENTICATION_HEADER = 'Authorization';

export default class AxiosHttpProvider implements IHTTPProvider {
  public get authentication(): IAuthenticationData | null {
    return Http.instance.defaults.headers[AUTHENTICATION_HEADER];
  }

  public set authentication(value: IAuthenticationData | null) {
    if (value) {
      const { accessToken } = value;
      Http.instance.defaults.headers[AUTHENTICATION_HEADER] = accessToken;
    } else delete Http.instance.defaults.headers[AUTHENTICATION_HEADER];
  }

  public async delete<T = unknown>(
    path: string,
    config?: IRequestConfig,
  ): Promise<T> {
    return this.handleRequest(async () => {
      const response = await Http.instance.delete(path, config);

      return response.data;
    });
  }

  public async get<T = unknown>(
    path: string,
    config?: IRequestConfig,
  ): Promise<T> {
    return this.handleRequest(async () => {
      const response = await Http.instance.get(path, config);

      return response.data;
    });
  }

  public async patch<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T> {
    return this.handleRequest(async () => {
      const response = await Http.instance.patch(path, body, config);

      return response.data;
    });
  }

  public async post<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T> {
    return this.handleRequest(async () => {
      const response = await Http.instance.post(path, body, config);

      return response.data;
    });
  }

  public async put<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T> {
    return this.handleRequest(async () => {
      const response = await Http.instance.put(path, body, config);

      return response.data;
    });
  }

  private async handleRequest<T extends any>(
    request: () => Promise<T>,
  ): Promise<T> {
    try {
      const response = await request();

      return response;
    } catch (error: any) {
      throw new HttpError(error);
    }
  }
}
