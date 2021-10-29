import { IUserProfile } from '@/domain/entities/IUser';
import IUserProfilesRepository from '@/domain/repositories/IUserProfilesRepository';

export default class GetUserProfileUseCase {
  constructor(private userProfilesRepository: IUserProfilesRepository) {}

  public async execute(userId: string): Promise<IUserProfile> {
    return this.userProfilesRepository.findOne(userId);
  }
}
