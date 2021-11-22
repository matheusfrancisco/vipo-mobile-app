import IRecommendation from '@/domain/entities/IRecommendation';

export interface IFindRecommendationWithParams {
  desirablePrice: string;
  groupSize: number;
  interests: string[];
}

export default interface IRecommendationsRepository {
  findWith(params: IFindRecommendationWithParams): Promise<IRecommendation[]>;
}
