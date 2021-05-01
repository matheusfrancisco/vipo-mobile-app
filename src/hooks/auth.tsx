import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import Client from '../services/api';

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}
interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signOut(): void;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const AUTH_HEADER = 'Authorization';
const STORAGE_TOKEN = '@Vipo:token';
const STORAGE_USER = '@Vipo:user';

const AuthUser: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await Client.http.post('/signin', { email, password });

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

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
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

async function getToken(): Promise<string | null> {
  const [token, user] = await AsyncStorage.multiGet([
    '@Vipo:token',
    '@Vipo:user',
  ]);
  return token[1];
}

export { AuthUser, useAuth, getToken };
