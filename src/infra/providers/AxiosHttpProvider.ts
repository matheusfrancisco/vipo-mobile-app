import Http from '@/config/http';
import IHTTPProvider, {
  IAuthenticationData,
  IRequestConfig,
} from '@/domain/providers/IHTTPProvider';

const AUTHENTICATION_HEADER = 'Authorization';

export default class AxiosHttpProvider implements IHTTPProvider {
  public get authentication(): IAuthenticationData | null {
    return Http.instance.defaults.headers[AUTHENTICATION_HEADER];
  }

  public set authentication(value: IAuthenticationData | null) {
    if (value) Http.instance.defaults.headers[AUTHENTICATION_HEADER] = value;
    else delete Http.instance.defaults.headers[AUTHENTICATION_HEADER];
  }

  public async delete<T = unknown>(
    path: string,
    config?: IRequestConfig,
  ): Promise<T> {
    return Http.instance.delete(path, config);
  }

  public async get<T = unknown>(
    path: string,
    config?: IRequestConfig,
  ): Promise<T> {
    return Http.instance.get(path, config);
  }

  public async patch<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T> {
    return Http.instance.patch(path, body, config);
  }

  public async post<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T> {
    return Http.instance.post(path, body, config);
  }

  public async put<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T> {
    return Http.instance.put(path, body, config);
  }
}
