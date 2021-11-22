import IGetNightOutRecommendationDTO from '@/domain/dtos/IGetNightOutRecommendationDTO';
import IRecommendation from '@/domain/entities/IRecommendation';
import GetNightOutRecommendationUseCase from '@/useCases/GetNightOutRecommendationUseCase';

export default class MatchsController {
  constructor(
    private readonly getNightOutRecommendation: GetNightOutRecommendationUseCase,
  ) {}

  public async getRecommendation(
    payload: IGetNightOutRecommendationDTO,
  ): Promise<{ error?: string; response?: IRecommendation[] }> {
    try {
      const response = await this.getNightOutRecommendation.execute(payload);

      return { response };
    } catch (error: any) {
      const { data } = error.response;
      return { error: data.message };
    }
  }
}
