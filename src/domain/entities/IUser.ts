import IProfile from '@/domain/entities/IProfile';

export default interface IUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  address?: string;
}

export interface IUserProfile extends IUser {
  profile: IProfile;
}
