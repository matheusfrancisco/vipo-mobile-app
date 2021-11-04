import faker from 'faker';

import IRecommendation from '@/domain/entities/IRecommendation';

export default class FakeRecommendation implements IRecommendation {
  public id = faker.datatype.number();
  public openAt = faker.date.soon().toISOString();
  public name = faker.company.companyName();
  public instagram = faker.internet.email();
  public banner = faker.company.bs();
  public description = faker.company.catchPhraseDescriptor();
  public ticket = faker.commerce.price();
  public bonus? = faker.commerce.price();
  public location = faker.address.city();
}
