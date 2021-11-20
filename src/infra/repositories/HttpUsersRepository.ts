import Http from '@/config/http';
import IUser from '@/domain/entities/IUser';
import IHTTPProvider from '@/domain/providers/IHTTPProvider';
import {
  ICreateUser,
  IUpdateUser,
  IUsersRepository,
} from '@/domain/repositories/IUsersRepository';

export default class HttpUsersRepository implements IUsersRepository {
  constructor(private readonly httpProvider: IHTTPProvider) {}

  public async create({
    name,
    lastName,
    email,
    gender,
    birthDate,
    password,
  }: ICreateUser): Promise<IUser> {
    return this.httpProvider.post(Http.PATHS.USERS.CREATE, {
      name,
      lastName,
      email,
      gender,
      birthDate: birthDate.toJSON(),
      password,
    });
  }

  public async updateOne({
    id: _, // The id is supposed to be sent with the authentication token
    name,
    lastName,
    address,
  }: IUpdateUser): Promise<IUser> {
    return this.httpProvider.patch(Http.PATHS.USERS.EDIT, {
      name,
      lastName,
      address,
    });
  }
}
