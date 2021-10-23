interface StandardSignInCredentials {
  email: string;
  password: string;
}

export interface GoogleSignInCredentials {
  token: string;
}

export type SignInCredentials =
  | StandardSignInCredentials
  | GoogleSignInCredentials;

export default interface IAuthenticationRepository {
  login(credentials: SignInCredentials): Promise<string>;
}
