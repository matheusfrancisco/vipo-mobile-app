import Axios from 'axios';
import envs from 'react-native-config';

const REQUEST_TIMEOUT = 5000;
const TIMEOUT_MESSAGE = 'Request timeouted';

const instance = Axios.create({
  baseURL: envs.API_URL,
  timeout: REQUEST_TIMEOUT,
  timeoutErrorMessage: TIMEOUT_MESSAGE,
});

const PATHS = {
  USERS: {
    CREATE: '/users',
    EDIT: '/users',
  },
  PROFILES: {
    GET: '/profiles',
    EDIT: '/profiles',
  },
  RECOMMENDATIONS: {
    FIND: '/users/recommendation',
  },
  SIGNIN: {
    GOOGLE: '/signin/google',
    DEFAULT: '/signin',
  },
};

const Http = {
  instance,
  PATHS,
};

export default Http;
