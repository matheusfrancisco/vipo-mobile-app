import IUserProfilesRepository from '@/domain/repositories/IUserProfilesRepository';
import HttpProviderFactory from '@/infra/providers/factories/HttpProviderFactory';
import HttpUserProfilesRepository from '@/infra/repositories/HttpUserProfilesRepository';

export default class UserProfilesRepositoryFactory {
  private static instance: IUserProfilesRepository;

  public static getInstance(): IUserProfilesRepository {
    if (!UserProfilesRepositoryFactory.instance) {
      const httpProvider = HttpProviderFactory.getInstance();

      UserProfilesRepositoryFactory.instance = new HttpUserProfilesRepository(
        httpProvider,
      );
    }

    return UserProfilesRepositoryFactory.instance;
  }
}
