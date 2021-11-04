/**
 * @group unit
 */

import FakeUser from '@/domain/entities/fakes/FakeUser';
import FakeUsersRepository from '@/domain/repositories/fakes/FakeUsersRepository';

import PatchUserUseCase from './PatchUserUseCase';

describe('PatchUserUseCase', () => {
  it('should update the user correctly', async () => {
    const repository = new FakeUsersRepository();
    const useCase = new PatchUserUseCase(repository);

    const fakeUser = new FakeUser();
    const createdUser = await repository.create({
      name: fakeUser.name,
      email: fakeUser.email,
      birthDate: '',
      gender: '',
      password: '',
    });

    const updatedUser = await useCase.execute({
      id: createdUser.id,
      name: 'John',
      lastName: 'Doe',
      address: 'New York',
    });

    expect(updatedUser).not.toEqual(createdUser);
    expect(updatedUser.name).toBe('John');
    expect(updatedUser.lastName).toBe('Doe');
    expect(updatedUser.address).toBe('New York');
  });

  it('should throw user not found if the user does not exist', async () => {
    const useCase = new PatchUserUseCase(new FakeUsersRepository());
    const user = new FakeUser();

    await expect(
      useCase.execute({
        id: user.id,
        name: 'John',
        lastName: 'Doe',
        address: 'New York',
      }),
    ).rejects.toThrow('User not found');
  });

  it('should throw when an error occurs', async () => {
    const repository = new FakeUsersRepository();
    repository.updateOne = () =>
      Promise.reject(new Error('Something went wrong'));
    const useCase = new PatchUserUseCase(repository);
    const user = new FakeUser();

    await expect(
      useCase.execute({
        id: user.id,
        name: 'John',
        lastName: 'Doe',
        address: 'New York',
      }),
    ).rejects.toThrow('Something went wrong');
  });
});
