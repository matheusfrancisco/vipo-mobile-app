import IHTTPProvider from '@/domain/providers/IHTTPProvider';
import AxiosHttpProvider from '@/infra/providers/AxiosHttpProvider';

export default class HttpProviderFactory {
  private static instance: IHTTPProvider;

  public static getInstance(): IHTTPProvider {
    if (!HttpProviderFactory.instance) {
      HttpProviderFactory.instance = new AxiosHttpProvider();
    }

    return HttpProviderFactory.instance;
  }
}
