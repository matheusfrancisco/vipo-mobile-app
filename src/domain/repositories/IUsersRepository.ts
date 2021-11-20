import IUser from '@/domain/entities/IUser';

export interface ICreateUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  birthDate: Date;
}

export interface IUpdateUser {
  id: string;
  name: string;
  lastName: string;
  address: string;
}

export interface IUsersRepository {
  create(user: ICreateUser): Promise<IUser>;
  updateOne(user: IUpdateUser): Promise<IUser>;
}
