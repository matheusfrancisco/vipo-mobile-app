import faker from 'faker';

import IUser from '@/domain/entities/IUser';

export default class FakeUser implements IUser {
  public id = faker.random.uuid();
  public name = faker.name.firstName();
  public lastName = faker.name.lastName();
  public email = faker.internet.email();
  public address = faker.address.streetAddress();
}
