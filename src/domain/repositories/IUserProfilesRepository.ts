import IProfile from '@/domain/entities/IProfile';
import { IUserProfile } from '@/domain/entities/IUser';

export default interface IUserProfilesRepository {
  findOne(userId: string): Promise<IUserProfile>;
  updateOne(userId: string, profile: IProfile): Promise<IUserProfile>;
}
