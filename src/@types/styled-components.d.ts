import 'styled-components';

import theme from '@/config/theme';

declare module 'styled-components' {
  type MyDefaultTheme = typeof theme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyDefaultTheme {}
}
