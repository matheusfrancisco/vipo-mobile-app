import ICreateUserDTO from '@/domain/dtos/ICreateUserDTO';
import CreateUserUseCase from '@/useCases/CreateUserUseCase';

export default class SignUpController {
  constructor(private readonly createUseUseCase: CreateUserUseCase) {}

  public async createUser(user: ICreateUserDTO): Promise<{ error?: string }> {
    try {
      await this.createUseUseCase.execute(user);

      return {};
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
