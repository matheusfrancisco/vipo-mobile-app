import FakeUserProfile from '@/domain/entities/fakes/FakeUserProfile';
import IProfile from '@/domain/entities/IProfile';
import { IUserProfile } from '@/domain/entities/IUser';
import IUserProfilesRepository from '@/domain/repositories/IUserProfilesRepository';

export default class FakeUserProfilesRepository
  implements IUserProfilesRepository {
  private profiles: IUserProfile[] = [];

  public createFake(): IUserProfile {
    const profile = new FakeUserProfile();
    this.profiles.push(profile);

    return profile;
  }

  public async findOne(userId: string): Promise<IUserProfile> {
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === userId,
    );

    if (profileIndex < 0) throw new Error('Profile not found');

    return this.profiles[profileIndex];
  }

  public async updateOne(
    userId: string,
    { drinks, foods, musicals }: IProfile,
  ): Promise<IUserProfile> {
    const profileIndex = this.profiles.findIndex(
      (profile) => profile.id === userId,
    );

    if (profileIndex < 0) throw new Error('Profile not found');

    const updatedProfile = {
      ...this.profiles[profileIndex],
      profile: { drinks, foods, musicals },
    };

    this.profiles[profileIndex] = updatedProfile;

    return updatedProfile;
  }
}
