import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import IUser from '@/domain/entities/IUser';
import {
  GoogleSignInCredentials,
  SignInCredentials,
} from '@/domain/repositories/IAuthenticationRepository';

import Client from '../services/api';

interface AuthState {
  token: string;
  user: IUser;
}

interface AuthContextData {
  user: IUser;
  loading: boolean;
  signOut(): void;
  signIn(credentials: SignInCredentials): Promise<void>;
  updateUser(user: IUser): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const AUTH_HEADER = 'Authorization';
const STORAGE_TOKEN = '@Vipo:token';
const STORAGE_USER = '@Vipo:user';

const isGoogleSignIn = (
  credentials: any,
): credentials is GoogleSignInCredentials => Boolean(credentials.token);

const AuthUser: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  const signIn = useCallback<AuthContextData['signIn']>(async (credentials) => {
    const response = isGoogleSignIn(credentials)
      ? await Client.http.post('/signin/google', {
          token: credentials.token,
        })
      : await Client.http.post('/signin', {
          email: credentials.email,
          password: credentials.password,
        });

    const { token, user } = response.data;
    Client.addHttpHeader(AUTH_HEADER, `Bearer ${token}`);

    await AsyncStorage.multiSet([
      [STORAGE_TOKEN, token],
      [STORAGE_USER, JSON.stringify(user)],
    ]);

    setData({ token, user });
  }, []);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        STORAGE_TOKEN,
        STORAGE_USER,
      ]);
      if (token[1] && user[1]) {
        Client.addHttpHeader(AUTH_HEADER, `Bearer ${token[1]}`);
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([STORAGE_USER, STORAGE_TOKEN]);
    Client.removeHttpHeader(AUTH_HEADER);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(async (user: IUser) => {
    await AsyncStorage.setItem(STORAGE_USER, JSON.stringify(user));

    setData((data) => ({
      user,
      token: data.token,
    }));
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, updateUser }}>
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
