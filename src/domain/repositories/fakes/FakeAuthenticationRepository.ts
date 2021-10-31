import faker from 'faker';

import FakeUser from '@/domain/entities/fakes/FakeUser';
import IAuthenticationRepository, {
  GoogleSignInCredentials,
  ILoginData,
  SignInCredentials,
} from '@/domain/repositories/IAuthenticationRepository';
export default class FakeAuthenticationRepository
  implements IAuthenticationRepository {
  public login(credentials: SignInCredentials): Promise<ILoginData> {
    if (!this.areValidCredentials(credentials))
      throw new Error('Invalid credentials');

    return Promise.resolve({
      token: faker.datatype.uuid(),
      user: new FakeUser(),
    });
  }

  private areValidCredentials(credentials: SignInCredentials): boolean {
    if (this.isGoogleSignIn(credentials)) return true;

    return Boolean(credentials.email && credentials.password);
  }

  private isGoogleSignIn(
    credentials: any,
  ): credentials is GoogleSignInCredentials {
    return Boolean(credentials.token);
  }
}
