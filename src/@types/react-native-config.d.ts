import 'react-native-config';

declare module 'react-native-config' {
  export interface NativeConfig {
    GOOGLE_AUTH_CLIENT_ID: string;
    API_URL: string;
  }
}
