import RecommendationsRepositoryFactory from '@/infra/repositories/factories/RecommendationsRepositoryFactory';
import GetNightOutRecommendationUseCase from '@/useCases/GetNightOutRecommendationUseCase';

export default class GetNightOutRecommendationUseCaseFactory {
  private static instance: GetNightOutRecommendationUseCase;

  public static getInstance(): GetNightOutRecommendationUseCase {
    if (!GetNightOutRecommendationUseCaseFactory.instance) {
      const repository = RecommendationsRepositoryFactory.getInstance();

      GetNightOutRecommendationUseCaseFactory.instance = new GetNightOutRecommendationUseCase(
        repository,
      );
    }

    return GetNightOutRecommendationUseCaseFactory.instance;
  }
}
