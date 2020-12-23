import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

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
  fakeSingIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthUser: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    await AsyncStorage.setItem('@Vipo:token', data.token);
    await AsyncStorage.setItem('@Vipo:user', JSON.stringify(data.user));
    await AsyncStorage.multiSet([
      ['@Vipo:token', data.token],
      ['@Vipo:user', JSON.stringify(data.user)],
    ]);

    setData({ token, user });
  }, []);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Vipo:token',
        '@Vipo:user',
      ]);
      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Vipo:token', '@Vipo:user']);

    setData({} as AuthState);
  }, []);

  const fakeSingIn = useCallback(async () => {
    const fakeUser = {
      id: 'string',
      avatar_url: 'string',
      name: 'string',
      email: 'string',
    };
    setData({ token: 'fake', user: fakeUser });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, fakeSingIn }}
    >
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
