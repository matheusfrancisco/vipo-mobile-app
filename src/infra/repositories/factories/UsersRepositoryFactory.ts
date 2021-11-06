import { IUsersRepository } from '@/domain/repositories/IUsersRepository';
import HttpProviderFactory from '@/infra/providers/factories/HttpProviderFactory';
import HttpUsersRepository from '@/infra/repositories/HttpUsersRepository';

export default class UsersRepositoryFactory {
  private static instance: IUsersRepository;

  public static getInstance(): IUsersRepository {
    if (!UsersRepositoryFactory.instance) {
      const httpProvider = HttpProviderFactory.getInstance();

      UsersRepositoryFactory.instance = new HttpUsersRepository(httpProvider);
    }

    return UsersRepositoryFactory.instance;
  }
}
