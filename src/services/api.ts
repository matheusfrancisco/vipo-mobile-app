import axios from 'axios';
//#TODO need change when env is productions
import env from '../config/env';

class Client {
  static http = axios.create({
    baseURL: env.DEV_API,
  });

  static addHttpHeader = (key: string, value: string): void => {
    Client.http.defaults.headers[key] = value;
  };

  static removeHttpHeader = (key: string): void => {
    delete Client.http.defaults.headers[key];
  };
}

export default Client;
