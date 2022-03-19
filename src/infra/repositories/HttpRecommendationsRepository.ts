import Http from '@/config/http';
import IRecommendation from '@/domain/entities/IRecommendation';
import IHTTPProvider from '@/domain/providers/IHTTPProvider';
import IRecommendationsRepository, {
  IFindRecommendationWithParams,
} from '@/domain/repositories/IRecommendationsRepository';

export default class HttpRecommendationsRepository
  implements IRecommendationsRepository {
  constructor(private readonly httpProvider: IHTTPProvider) {}

  public async findWith({
    desirablePrice,
    groupSize,
    interests,
  }: IFindRecommendationWithParams): Promise<IRecommendation> {
    return this.httpProvider.post(Http.PATHS.RECOMMENDATIONS.FIND, {
      howMuch: desirablePrice,
      numberOfPeople: groupSize,
      like: interests,
    });
  }
}
