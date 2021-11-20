import IRecommendationsRepository from '@/domain/repositories/IRecommendationsRepository';
import HttpProviderFactory from '@/infra/providers/factories/HttpProviderFactory';
import HttpRecommendationsRepository from '@/infra/repositories/HttpRecommendationsRepository';

export default class RecommendationsRepositoryFactory {
  private static instance: IRecommendationsRepository;

  public static getInstance(): IRecommendationsRepository {
    if (!RecommendationsRepositoryFactory.instance) {
      const httpProvider = HttpProviderFactory.getInstance();

      RecommendationsRepositoryFactory.instance = new HttpRecommendationsRepository(
        httpProvider,
      );
    }

    return RecommendationsRepositoryFactory.instance;
  }
}
