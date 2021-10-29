import IPatchUserProfileDTO from '@/domain/dtos/IPatchUserProfileDTO';
import { IUserProfile } from '@/domain/entities/IUser';
import IUserProfilesRepository from '@/domain/repositories/IUserProfilesRepository';

export default class PatchUserProfileUseCase {
  constructor(private userProfilesRepository: IUserProfilesRepository) {}

  public async execute({
    userId,
    drinks,
    foods,
    musicals,
  }: IPatchUserProfileDTO): Promise<IUserProfile> {
    return this.userProfilesRepository.updateOne(userId, {
      drinks,
      foods,
      musicals,
    });
  }
}
