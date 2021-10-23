import IProfile from '@/domain/entities/IProfile';
import IUser, { IUserProfile } from '@/domain/entities/IUser';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
  gender: string;
  birthDate: string;
}

interface IUpdateUser {
  name: string;
  lastName: string;
  address: string;
}

export interface IUsersRepository {
  create(user: ICreateUser): Promise<void>;
  update(user: IUpdateUser): Promise<IUser>;

  getProfile(userId: string): Promise<IUserProfile>;
  updateProfile(userId: string, profile: IProfile): Promise<void>;
}
