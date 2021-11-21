import UserProfilesRepositoryFactory from '@/infra/repositories/factories/UserProfilesRepositoryFactory';
import GetUserProfileUseCase from '@/useCases/GetUserProfileUseCase';

export default class GetUserProfileUseCaseFactory {
  private static instance: GetUserProfileUseCase;

  public static getInstance(): GetUserProfileUseCase {
    if (!GetUserProfileUseCaseFactory.instance) {
      const repository = UserProfilesRepositoryFactory.getInstance();

      GetUserProfileUseCaseFactory.instance = new GetUserProfileUseCase(
        repository,
      );
    }

    return GetUserProfileUseCaseFactory.instance;
  }
}
