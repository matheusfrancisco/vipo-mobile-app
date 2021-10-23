import { IUserProfile } from '@/domain/entities/IUser';

export interface IUsersRepository {
  getProfile(userId: string): Promise<IUserProfile>;
}
