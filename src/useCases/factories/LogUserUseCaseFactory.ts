import AuthenticationRepositoryFactory from '@/infra/repositories/factories/AuthenticationRepositoryFactory';
import LogUserUseCase from '@/useCases/LogUserUseCase';

export default class LogUserUseCaseFactory {
  private static instance: LogUserUseCase;

  public static getInstance(): LogUserUseCase {
    if (!LogUserUseCaseFactory.instance) {
      const repository = AuthenticationRepositoryFactory.getInstance();

      LogUserUseCaseFactory.instance = new LogUserUseCase(repository);
    }

    return LogUserUseCaseFactory.instance;
  }
}
