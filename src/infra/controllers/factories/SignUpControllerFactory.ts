import SignUpController from '@/infra/controllers/SignUpController';
import CreateUserUseCaseFactory from '@/useCases/factories/CreateUserUseCaseFactory';

export default class SignUpControllerFactory {
  private static instance: SignUpController | null = null;

  public static getInstance(): SignUpController {
    if (!this.instance) {
      this.instance = new SignUpController(
        CreateUserUseCaseFactory.getInstance(),
      );
    }

    return this.instance;
  }
}
