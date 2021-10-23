import IRecommendation from '@/domain/entities/IRecommendation';

interface IFindRecommendationWithParams {
  desirablePrice: string;
  groupSize: number;
  interests: string[];
}

export default interface IRecommendationsRepository {
  findWith(params: IFindRecommendationWithParams): Promise<IRecommendation>;
}
