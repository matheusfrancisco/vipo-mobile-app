interface PaletteOptions {
  light: string;
  main: string;
  dark: string;
  contrast: string;
}

type PaletteKeys = 'primary' | 'secondary' | 'error';

const gray = {
  0: '#f8fbfa',
  100: '#E0E3E2',
  200: '#C9CBCB',
  300: '#B1B3B3',
  400: '#9A9B9C',
  500: '#828384',
  600: '#6A6B6C',
  700: '#535355',
  800: '#3B3B3D',
  900: '#242326',
  1000: '#0c0b0e',
};

type ScalePallete = typeof gray;
type ScalePalleteKeys = 'gray';

type StatusBarColors = 'light-content' | 'dark-content' | 'default';
type StatusBarPallete = {
  statusBar: StatusBarColors;
};

const palette: Record<PaletteKeys, PaletteOptions> &
  Record<ScalePalleteKeys, ScalePallete> &
  StatusBarPallete = {
  primary: {
    light: '#9f17e8',
    main: '#6f10a2',
    dark: '#470a68',
    contrast: '#F5F5F5',
  },
  secondary: {
    light: '#a69acb',
    main: '#9283bf',
    dark: '#6b57a8',
    contrast: '#F5F5F5',
  },
  error: {
    light: '#e69898',
    main: '#d75b5b',
    dark: '#c53030',
    contrast: '#F5F5F5',
  },
  gray,
  statusBar: 'light-content',
};

export default palette;
