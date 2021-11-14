import IPatchUserDTO from '@/domain/dtos/IPatchUserDTO';
import IPatchUserProfileDTO from '@/domain/dtos/IPatchUserProfileDTO';
import IUser, { IUserProfile } from '@/domain/entities/IUser';
import GetUserProfileUseCase from '@/useCases/GetUserProfileUseCase';
import PatchUserProfileUseCase from '@/useCases/PatchUserProfileUseCase';
import PatchUserUseCase from '@/useCases/PatchUserUseCase';

export default class ProfileController {
  constructor(
    private readonly getUserProfileUseCase: GetUserProfileUseCase,
    private readonly patchUserUseCase: PatchUserUseCase,
    private readonly patchUserProfileUseCase: PatchUserProfileUseCase,
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

  public async patchUser(
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

  public async patchUserProfile(
    payload: IPatchUserProfileDTO,
  ): Promise<{
    error?: string;
  }> {
    try {
      await this.patchUserProfileUseCase.execute(payload);

      return {};
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
