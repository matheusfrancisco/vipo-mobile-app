import AuthenticationController from '@/infra/controllers/AuthenticationController';
import LogUserUseCaseFactory from '@/useCases/factories/LogUserUseCaseFactory';

export default class AuthenticationControllerFactory {
  private static instance: AuthenticationController | null = null;

  public static getInstance(): AuthenticationController {
    if (!this.instance) {
      this.instance = new AuthenticationController(
        LogUserUseCaseFactory.getInstance(),
      );
    }

    return this.instance;
  }
}
