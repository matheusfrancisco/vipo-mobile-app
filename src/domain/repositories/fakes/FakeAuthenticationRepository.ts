import faker from 'faker';

import FakeUser from '@/domain/entities/fakes/FakeUser';
import IAuthenticationRepository, {
  ILoginData,
  SignInCredentials,
} from '@/domain/repositories/IAuthenticationRepository';
export default class FakeAuthenticationRepository
  implements IAuthenticationRepository {
  public login(_: SignInCredentials): Promise<ILoginData> {
    return Promise.resolve({
      token: faker.datatype.uuid(),
      user: new FakeUser(),
    });
  }
}
