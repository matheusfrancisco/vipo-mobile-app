import UsersRepositoryFactory from '@/infra/repositories/factories/UsersRepositoryFactory';
import CreateUserUseCase from '@/useCases/CreateUserUseCase';

export default class CreateUserUseCaseFactory {
  private static instance: CreateUserUseCase;

  public static getInstance(): CreateUserUseCase {
    if (!CreateUserUseCaseFactory.instance) {
      const repository = UsersRepositoryFactory.getInstance();

      CreateUserUseCaseFactory.instance = new CreateUserUseCase(repository);
    }

    return CreateUserUseCaseFactory.instance;
  }
}
