import FakeUser from '@/domain/entities/fakes/FakeUser';
import IUser from '@/domain/entities/IUser';
import {
  ICreateUser,
  IUpdateUser,
  IUsersRepository,
} from '@/domain/repositories/IUsersRepository';

export default class FakeUsersRepository implements IUsersRepository {
  private users: IUser[] = [];

  public async create({ name, email }: ICreateUser): Promise<void> {
    const user = new FakeUser({ name, email });

    this.users.push(user);
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

    user.name = name;
    user.lastName = lastName;
    user.address = address;

    return user;
  }
}
