import IPatchUserProfileDTO from '@/domain/dtos/IPatchUserProfileDTO';
import { IUserProfile } from '@/domain/entities/IUser';
import GetUserProfileUseCase from '@/useCases/GetUserProfileUseCase';
import PatchUserProfileUseCase from '@/useCases/PatchUserProfileUseCase';

export default class ProfileController {
  constructor(
    private readonly getUserProfileUseCase: GetUserProfileUseCase,
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

  public async patchUserProfile(
    payload: IPatchUserProfileDTO,
  ): Promise<{
    error?: string;
    response?: IUserProfile;
  }> {
    try {
      const response = await this.patchUserProfileUseCase.execute(payload);

      return { response };
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
