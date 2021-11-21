import IAuthenticationRepository from '@/domain/repositories/IAuthenticationRepository';
import HttpProviderFactory from '@/infra/providers/factories/HttpProviderFactory';
import HttpAuthenticationRepository from '@/infra/repositories/HttpAuthenticationRepository';

export default class AuthenticationRepositoryFactory {
  private static instance: IAuthenticationRepository;

  public static getInstance(): IAuthenticationRepository {
    if (!AuthenticationRepositoryFactory.instance) {
      const httpProvider = HttpProviderFactory.getInstance();

      AuthenticationRepositoryFactory.instance = new HttpAuthenticationRepository(
        httpProvider,
      );
    }

    return AuthenticationRepositoryFactory.instance;
  }
}
