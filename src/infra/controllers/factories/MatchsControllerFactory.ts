import MatchsController from '@/infra/controllers/MatchsController';
import GetNightOutRecommendationUseCaseFactory from '@/useCases/factories/GetNightOutRecommendationUseCaseFactory';

export default class MatchsControllerFactory {
  private static instance: MatchsController | null = null;

  public static getInstance(): MatchsController {
    if (!this.instance) {
      this.instance = new MatchsController(
        GetNightOutRecommendationUseCaseFactory.getInstance(),
      );
    }

    return this.instance;
  }
}
