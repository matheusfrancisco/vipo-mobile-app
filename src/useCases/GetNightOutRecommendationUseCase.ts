import IGetNightOutRecommendationDTO from '@/domain/dtos/IGetNightOutRecommendationDTO';
import IRecommendation from '@/domain/entities/IRecommendation';
import IRecommendationsRepository from '@/domain/repositories/IRecommendationsRepository';

export default class GetNightOutRecommendationUseCase {
  constructor(private recommendationsRepository: IRecommendationsRepository) {}

  public async execute({
    desirablePrice,
    groupSize,
    interests,
  }: IGetNightOutRecommendationDTO): Promise<IRecommendation> {
    return this.recommendationsRepository.findWith({
      desirablePrice,
      groupSize,
      interests,
    });
  }
}
