import Http from '@/config/http';
import IProfile from '@/domain/entities/IProfile';
import { IUserProfile } from '@/domain/entities/IUser';
import IHTTPProvider from '@/domain/providers/IHTTPProvider';
import IUserProfilesRepository from '@/domain/repositories/IUserProfilesRepository';

export default class HttpUserProfilesRepository
  implements IUserProfilesRepository {
  constructor(private readonly httpProvider: IHTTPProvider) {}

  public async findOne(): Promise<IUserProfile> {
    return this.httpProvider.get(Http.PATHS.PROFILES.GET);
  }

  public async updateOne(
    _: unknown,
    { drinks, foods, musicals }: IProfile,
  ): Promise<IUserProfile> {
    return this.httpProvider.patch(Http.PATHS.PROFILES.EDIT, {
      drinks,
      foods,
      musicals,
    });
  }
}
