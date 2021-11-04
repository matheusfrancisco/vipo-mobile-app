import FakeRecommendation from '@/domain/entities/fakes/FakeRecommendation';
import IRecommendation from '@/domain/entities/IRecommendation';
import IRecommendationsRepository from '@/domain/repositories/IRecommendationsRepository';

export default class FakeRecommendationsRepository
  implements IRecommendationsRepository {
  public async findWith(_: unknown): Promise<IRecommendation> {
    return new FakeRecommendation();
  }
}
