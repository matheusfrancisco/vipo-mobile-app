import axios from 'axios';
import envs from 'react-native-config';

class Client {
  static http = axios.create({
    baseURL: envs.API_URL,
  });

  static addHttpHeader = (key: string, value: string): void => {
    Client.http.defaults.headers[key] = value;
  };

  static removeHttpHeader = (key: string): void => {
    delete Client.http.defaults.headers[key];
  };
}

export default Client;
