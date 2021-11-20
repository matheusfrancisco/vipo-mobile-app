import IStorageProvider from '@/domain/providers/IStorageProvider';
import AsyncStorageProvider from '@/infra/providers/AsyncStorageProvider';

export default class StorageProviderFactory {
  private static instance: IStorageProvider;

  public static getInstance(): IStorageProvider {
    if (!StorageProviderFactory.instance) {
      StorageProviderFactory.instance = new AsyncStorageProvider();
    }

    return StorageProviderFactory.instance;
  }
}
