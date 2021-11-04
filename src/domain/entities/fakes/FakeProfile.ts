import faker from 'faker';

import IProfile from '@/domain/entities/IProfile';

export default class FakeProfile implements IProfile {
  public foods = faker.random.arrayElements();
  public drinks = faker.random.arrayElements();
  public musicals = faker.random.arrayElements();
}
