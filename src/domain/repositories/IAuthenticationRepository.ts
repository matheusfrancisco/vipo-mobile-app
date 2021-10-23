import IUser from '@/domain/entities/IUser';

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

interface ILoginData {
  token: string;
  user: IUser;
}

export default interface IAuthenticationRepository {
  login(credentials: SignInCredentials): Promise<ILoginData>;
}
