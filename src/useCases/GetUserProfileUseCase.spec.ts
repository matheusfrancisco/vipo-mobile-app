/**
 * @group unit
 */

import FakeUserProfilesRepository from '@/domain/repositories/fakes/FakeUserProfilesRepository';

import GetUserProfileUseCase from './GetUserProfileUseCase';

describe('GetUserProfileUseCase', () => {
  it('should return the profile correctly', async () => {
    const repository = new FakeUserProfilesRepository();
    const useCase = new GetUserProfileUseCase(repository);

    const user = repository.createFake();

    const profile = await useCase.execute(user.id);

    expect(profile).toEqual(user);
  });

  it('should throw an profile not found error if the user does not exist', async () => {
    const useCase = new GetUserProfileUseCase(new FakeUserProfilesRepository());

    await expect(useCase.execute('invalid-id')).rejects.toThrow(
      'Profile not found',
    );
  });

  it('should throw an error in case something goes wrong', async () => {
    const repository = new FakeUserProfilesRepository();
    repository.findOne = () =>
      Promise.reject(new Error('Something went wrong'));
    const useCase = new GetUserProfileUseCase(repository);

    const user = repository.createFake();

    await expect(useCase.execute(user.id)).rejects.toThrow(
      'Something went wrong',
    );
  });
});
