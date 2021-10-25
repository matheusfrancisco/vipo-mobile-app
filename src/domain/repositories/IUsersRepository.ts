import IUser from '@/domain/entities/IUser';

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
  updateOne(user: IUpdateUser): Promise<IUser>;
}
