import Http from '@/config/http';
import IProfile from '@/domain/entities/IProfile';
import { IUserProfile } from '@/domain/entities/IUser';
import IHTTPProvider from '@/domain/providers/IHTTPProvider';
import IUserProfilesRepository from '@/domain/repositories/IUserProfilesRepository';

export default class HttpUserProfilesRepository
  implements IUserProfilesRepository {
  constructor(private readonly httpProvider: IHTTPProvider) {}

  public async findOne(): Promise<IUserProfile> {
    const { data } = await this.httpProvider.get<{
      data: { user: IUserProfile };
    }>(Http.PATHS.PROFILES.GET);

    return data.user;
  }

  public async updateOne(
    _: unknown,
    { drinks, foods, musicals }: IProfile,
  ): Promise<IUserProfile> {
    const { data } = await this.httpProvider.patch<{
      data: { profile: IUserProfile };
    }>(Http.PATHS.PROFILES.EDIT, {
      profileInformations: {
        drinks,
        foods,
        musicals,
      },
    });
    return data.profile;
  }
}
