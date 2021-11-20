import AsyncStorage from '@react-native-community/async-storage';

import IStorageProvider from '@/domain/providers/IStorageProvider';

export default class AsyncStorageProvider implements IStorageProvider {
  public async clear(): Promise<void> {
    return AsyncStorage.clear();
  }

  public async delete(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  public async get<T = unknown>(key: string): Promise<T | null> {
    const item = await AsyncStorage.getItem(key);

    return item && JSON.parse(item);
  }

  public async store(key: string, data: unknown): Promise<void> {
    const stringifiedData = JSON.stringify(data);

    return AsyncStorage.setItem(key, stringifiedData);
  }
}
