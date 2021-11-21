import Http from '@/config/http';
import IHTTPProvider from '@/domain/providers/IHTTPProvider';
import IAuthenticationRepository, {
  GoogleSignInCredentials,
  ILoginData,
  SignInCredentials,
} from '@/domain/repositories/IAuthenticationRepository';

export default class HttpAuthenticationRepository
  implements IAuthenticationRepository {
  constructor(private readonly httpProvider: IHTTPProvider) {}

  public async login(credentials: SignInCredentials): Promise<ILoginData> {
    if (this.isGoogleSignIn(credentials)) {
      const { token } = credentials;
      return this.httpProvider.post(Http.PATHS.SIGNIN.GOOGLE, { token });
    }

    const { email, password } = credentials;
    const response = await this.httpProvider.post<{ data: ILoginData }>(
      Http.PATHS.SIGNIN.DEFAULT,
      {
        email,
        password,
      },
    );
    return response.data;
  }

  private isGoogleSignIn = (
    credentials: any,
  ): credentials is GoogleSignInCredentials => Boolean(credentials.token);
}
