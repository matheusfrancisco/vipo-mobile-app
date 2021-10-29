import FakeUser from '@/domain/entities/fakes/FakeUser';
import IUser from '@/domain/entities/IUser';
import {
  ICreateUser,
  IUpdateUser,
  IUsersRepository,
} from '@/domain/repositories/IUsersRepository';

export default class FakeUsersRepository implements IUsersRepository {
  private users: IUser[] = [];

  public async create({ name, email }: ICreateUser): Promise<IUser> {
    const user = new FakeUser({ name, email });

    this.users.push(user);

    return user;
  }

  public async updateOne({
    id,
    address,
    lastName,
    name,
  }: IUpdateUser): Promise<IUser> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex < 0) throw new Error('User not found');

    const user = this.users[userIndex];

    const updatedUser = {
      ...user,
      name: name,
      lastName: lastName,
      address: address,
    };

    this.users[userIndex] = updatedUser;

    return updatedUser;
  }
}
