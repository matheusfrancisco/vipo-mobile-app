import IUser from '@/domain/entities/IUser';

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  gender: string;
  birthDate: string;
}

export interface IUpdateUser {
  id: string;
  name: string;
  lastName: string;
  address: string;
}

export interface IUsersRepository {
  create(user: ICreateUser): Promise<void>;
  updateOne(user: IUpdateUser): Promise<IUser>;
}
