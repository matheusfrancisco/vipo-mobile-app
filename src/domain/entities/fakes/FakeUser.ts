import faker from 'faker';

import IUser from '@/domain/entities/IUser';

type IConstructor = {
  name?: string;
  lastName?: string;
  email?: string;
};

export default class FakeUser implements IUser {
  public id = faker.datatype.uuid();
  public name: string;
  public lastName: string;
  public email: string;
  public address = faker.address.streetAddress();

  constructor({
    name = faker.name.firstName(),
    lastName = faker.name.lastName(),
    email = faker.internet.email(),
  }: IConstructor = {}) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
  }
}
