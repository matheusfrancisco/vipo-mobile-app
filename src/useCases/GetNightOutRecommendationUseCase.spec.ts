/**
 * @group unit
 */

import FakeRecommendationsRepository from '@/domain/repositories/fakes/FakeRecommendationsRepository';

import GetNightOutRecommendationUseCase from './GetNightOutRecommendationUseCase';

describe('GetNightOutRecommendationUseCase', () => {
  it('should return a recommendation', async () => {
    const useCase = new GetNightOutRecommendationUseCase(
      new FakeRecommendationsRepository(),
    );

    const recommendation = await useCase.execute({
      desirablePrice: '$50,00',
      groupSize: 5,
      interests: ['rock', 'anime'],
    });

    expect(recommendation).toHaveProperty('name', expect.any(String));
    expect(recommendation).toHaveProperty('description', expect.any(String));
    expect(recommendation).toHaveProperty('openAt', expect.any(String));
    expect(recommendation).toHaveProperty('instagram', expect.any(String));
    expect(recommendation).toHaveProperty('banner', expect.any(String));
    expect(recommendation).toHaveProperty('ticket', expect.any(String));
    expect(recommendation).toHaveProperty('bonus', expect.any(String));
    expect(recommendation).toHaveProperty('location', expect.any(String));
  });

  it('should return an error if something wrong occurs', async () => {
    const repository = new FakeRecommendationsRepository();
    repository.findWith = () =>
      Promise.reject(new Error('Something went wrong'));
    const useCase = new GetNightOutRecommendationUseCase(repository);

    await expect(
      useCase.execute({
        desirablePrice: '$50,00',
        groupSize: 5,
        interests: ['rock', 'anime'],
      }),
    ).rejects.toThrow();
  });
});
