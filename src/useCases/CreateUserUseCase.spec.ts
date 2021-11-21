/**
 * @group unit
 */

import FakeUsersRepository from '@/domain/repositories/fakes/FakeUsersRepository';

import CreateUserUseCase from './CreateUserUseCase';

describe('CreateUserUseCase', () => {
  it('should create the user correctly', async () => {
    const useCase = new CreateUserUseCase(new FakeUsersRepository());

    const user = await useCase.execute({
      name: 'John',
      lastName: 'Doe',
      birthDate: new Date(),
      email: 'john.doe@gmail.com',
      gender: 'M',
      password: 'asd123',
    });

    expect(user).toHaveProperty('id', expect.any(String));
    expect(user).toHaveProperty('name', 'John');
    expect(user).toHaveProperty('lastName', 'Doe');
    expect(user).toHaveProperty('email', 'john.doe@gmail.com');
    expect(user).toHaveProperty('address', expect.any(String));
  });

  it('should throw when an error occurs', async () => {
    const repository = new FakeUsersRepository();
    repository.create = () => Promise.reject(new Error('Something went wrong'));
    const useCase = new CreateUserUseCase(repository);

    await expect(
      useCase.execute({
        name: 'John',
        lastName: 'Doe',
        birthDate: new Date(),
        email: 'john.doe@gmail.com',
        gender: 'M',
        password: 'asd123',
      }),
    ).rejects.toThrow('Something went wrong');
  });
});
