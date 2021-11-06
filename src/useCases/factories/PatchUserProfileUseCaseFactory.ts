import UserProfilesRepositoryFactory from '@/infra/repositories/factories/UserProfilesRepositoryFactory';
import PatchUserProfileUseCase from '@/useCases/PatchUserProfileUseCase';

export default class PatchUserProfileUseCaseFactory {
  private static instance: PatchUserProfileUseCase;

  public static getInstance(): PatchUserProfileUseCase {
    if (!PatchUserProfileUseCaseFactory.instance) {
      const repository = UserProfilesRepositoryFactory.getInstance();

      PatchUserProfileUseCaseFactory.instance = new PatchUserProfileUseCase(
        repository,
      );
    }

    return PatchUserProfileUseCaseFactory.instance;
  }
}
