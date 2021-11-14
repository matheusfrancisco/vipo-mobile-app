import IPatchUserDTO from '@/domain/dtos/IPatchUserDTO';
import IUser, { IUserProfile } from '@/domain/entities/IUser';
import GetUserProfileUseCase from '@/useCases/GetUserProfileUseCase';
import PatchUserUseCase from '@/useCases/PatchUserUseCase';

export default class ProfileController {
  constructor(
    private readonly getUserProfileUseCase: GetUserProfileUseCase,
    private readonly patchUserUseCase: PatchUserUseCase,
  ) {}

  public async getUserProfile(
    id: string,
  ): Promise<{ error?: string; response?: IUserProfile }> {
    try {
      const response = await this.getUserProfileUseCase.execute(id);

      return { response };
    } catch (error: any) {
      return { error: error.message };
    }
  }

  public async patchUserProfile(
    payload: IPatchUserDTO,
  ): Promise<{
    error?: string;
    response?: IUser;
  }> {
    try {
      const response = await this.patchUserUseCase.execute(payload);

      return { response };
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
