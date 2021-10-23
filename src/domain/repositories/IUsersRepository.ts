import IProfile from '@/domain/entities/IProfile';
import { IUserProfile } from '@/domain/entities/IUser';

export interface IUsersRepository {
  getProfile(userId: string): Promise<IUserProfile>;
  updateProfile(userId: string, profile: IProfile): Promise<void>;
}
