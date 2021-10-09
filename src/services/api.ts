import Http from '@/config/http';

class Client {
  static http = Http.instance;

  static addHttpHeader = (key: string, value: string): void => {
    Client.http.defaults.headers[key] = value;
  };

  static removeHttpHeader = (key: string): void => {
    delete Client.http.defaults.headers[key];
  };
}

export default Client;
