import faker from 'faker';

import IUser from '@/domain/entities/IUser';

type IConstructor = {
  name?: string;
  email?: string;
};

export default class FakeUser implements IUser {
  public id = faker.datatype.uuid();
  public name: string;
  public lastName = faker.name.lastName();
  public email: string;
  public address = faker.address.streetAddress();

  constructor({
    name = faker.name.firstName(),
    email = faker.internet.email(),
  }: IConstructor = {}) {
    this.name = name;
    this.email = email;
  }
}
