/**
 * @group unit
 */

import FakeProfile from '@/domain/entities/fakes/FakeProfile';
import FakeUserProfilesRepository from '@/domain/repositories/fakes/FakeUserProfilesRepository';

import PatchUserProfileUseCase from './PatchUserProfileUseCase';

describe('PatchUserProfileUseCase', () => {
  it('should return the profile correctly', async () => {
    const repository = new FakeUserProfilesRepository();
    const useCase = new PatchUserProfileUseCase(repository);

    const user = repository.createFake();
    const newProfile = new FakeProfile();

    const updatedUser = await useCase.execute({
      userId: user.id,
      drinks: newProfile.drinks,
      foods: newProfile.foods,
      musicals: newProfile.musicals,
    });

    expect(updatedUser.profile).not.toEqual(user.profile);
    expect(updatedUser.profile).toEqual(newProfile);
  });

  it('should throw an profile not found error if the user does not exist', async () => {
    const useCase = new PatchUserProfileUseCase(
      new FakeUserProfilesRepository(),
    );

    await expect(
      useCase.execute({ userId: 'invalid-id', ...new FakeProfile() }),
    ).rejects.toThrow('Profile not found');
  });

  it('should throw an error in case something goes wrong', async () => {
    const repository = new FakeUserProfilesRepository();
    repository.updateOne = () =>
      Promise.reject(new Error('Something went wrong'));
    const useCase = new PatchUserProfileUseCase(repository);

    const user = repository.createFake();

    await expect(
      useCase.execute({ userId: user.id, ...new FakeProfile() }),
    ).rejects.toThrow('Something went wrong');
  });
});
