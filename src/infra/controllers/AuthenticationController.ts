import ILogUserDTO from '@/domain/dtos/ILogUserDTO';
import IUser from '@/domain/entities/IUser';
import LogUserUseCase from '@/useCases/LogUserUseCase';

interface IAuthData {
  token: string;
  user: IUser;
}

export default class AuthenticationController {
  constructor(private readonly logUserUseCase: LogUserUseCase) {}

  public async login(
    payload: ILogUserDTO,
  ): Promise<{ error?: string; response?: IAuthData }> {
    try {
      const response = await this.logUserUseCase.execute(payload);
      return { response };
    } catch (error: any) {
      const { data } = error.response;
      return {
        error: data.message,
      };
    }
  }
}
