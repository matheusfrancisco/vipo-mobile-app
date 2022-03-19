import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

import IUser from '@/domain/entities/IUser';
import { SignInCredentials } from '@/domain/repositories/IAuthenticationRepository';
import AuthenticationControllerFactory from '@/infra/controllers/factories/AuthenticationControllerFactory';
import HttpProviderFactory from '@/infra/providers/factories/HttpProviderFactory';
import StorageProviderFactory from '@/infra/providers/factories/StorageProviderFactory';

interface AuthState {
  token: string;
  user: IUser;
}

interface AuthContextData {
  user: IUser;
  loading: boolean;
  signOut(): void;
  signIn(credentials: SignInCredentials): Promise<{ error?: string }>;
  updateUser(user: IUser): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const STORAGE_TOKEN = '@Vipo:token';
const STORAGE_USER = '@Vipo:user';

const AuthUser: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [initializing, setInitializing] = useState(true);
  const controller = useMemo(
    () => AuthenticationControllerFactory.getInstance(),
    [],
  );
  const httpProvider = useMemo(() => HttpProviderFactory.getInstance(), []);
  const storageProvider = useMemo(
    () => StorageProviderFactory.getInstance(),
    [],
  );

  const signIn = useCallback<AuthContextData['signIn']>(
    async (credentials) => {
      const { error, response } = await controller.login(credentials);
      if (error || !response) return { error };

      const { token, user } = response;
      httpProvider.authentication = { accessToken: `Bearer ${token}` };

      await Promise.all([
        storageProvider.store(STORAGE_TOKEN, token),
        storageProvider.store(STORAGE_USER, user),
      ]);

      setData({ token, user });

      return {};
    },
    [controller, httpProvider, storageProvider],
  );

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await Promise.all([
        storageProvider.get<string>(STORAGE_TOKEN),
        storageProvider.get<IUser>(STORAGE_USER),
      ]);

      if (token && user) {
        httpProvider.authentication = { accessToken: `Bearer ${token}` };
        setData({ token, user });
      }

      setInitializing(false);
    }
    loadStorageData();
  }, [httpProvider, storageProvider]);

  const signOut = useCallback(async () => {
    await Promise.all([
      storageProvider.delete(STORAGE_TOKEN),
      storageProvider.delete(STORAGE_USER),
    ]);
    httpProvider.authentication = null;

    setData({} as AuthState);
  }, [httpProvider, storageProvider]);

  const updateUser = useCallback(
    async (user: IUser) => {
      await storageProvider.store(STORAGE_USER, user);

      setData((data) => ({
        user,
        token: data.token,
      }));
    },
    [storageProvider],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading: initializing,
        signIn,
        signOut,
        updateUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthUser');
  }

  return context;
}

export { AuthUser, useAuth };
