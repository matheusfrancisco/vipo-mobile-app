/**
 * @group unit
 */

import faker from 'faker';

import FakeAuthenticationRepository from '@/domain/repositories/fakes/FakeAuthenticationRepository';

import LogUserUseCase from './LogUserUseCase';

describe('LogUserUseCase', () => {
  it('should log the user correctly with the email and password', async () => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const logUserUseCase = new LogUserUseCase(
      new FakeAuthenticationRepository(),
    );
    const result = await logUserUseCase.execute({ email, password });

    expect(result).toHaveProperty('token', expect.any(String));
    expect(result).toHaveProperty('user', expect.any(Object));
  });

  it('should log the user correctly the oauth token', async () => {
    const oauthToken = faker.internet.password();
    const logUserUseCase = new LogUserUseCase(
      new FakeAuthenticationRepository(),
    );
    const result = await logUserUseCase.execute({ token: oauthToken });

    expect(result).toHaveProperty('token', expect.any(String));
    expect(result).toHaveProperty('user', expect.any(Object));
  });

  it('should throw if an error occurs', async () => {
    const logUserUseCase = new LogUserUseCase(
      new FakeAuthenticationRepository(),
    );
    await expect(logUserUseCase.execute({} as any)).rejects.toThrow();
  });
});
