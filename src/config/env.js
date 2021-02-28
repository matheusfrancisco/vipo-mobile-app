import { Platform } from 'react-native';

import active from '../../active.env';

const envs = {
  stage: {
    DEV_API: 'http://10.0.2.2:3000',
    SOUNDS: Platform.OS === 'android' || false,
  },
  prod: {
    DEV_API: 'http://prod.api.com',
    SOUNDS: Platform.OS === 'android' || false,
  },
  dev: {
    DEV_API: 'http://10.0.2.2:3000',
    SOUNDS: Platform.OS === 'android' || false,
  },
};

export default envs[active];
