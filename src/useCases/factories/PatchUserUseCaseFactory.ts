import UsersRepositoryFactory from '@/infra/repositories/factories/UsersRepositoryFactory';
import PatchUserUseCase from '@/useCases/PatchUserUseCase';

export default class PatchUserUseCaseFactory {
  private static instance: PatchUserUseCase;

  public static getInstance(): PatchUserUseCase {
    if (!PatchUserUseCaseFactory.instance) {
      const repository = UsersRepositoryFactory.getInstance();

      PatchUserUseCaseFactory.instance = new PatchUserUseCase(repository);
    }

    return PatchUserUseCaseFactory.instance;
  }
}
