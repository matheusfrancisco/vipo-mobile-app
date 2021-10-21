interface IFamily {
  thin: string;
  regular: string;
  bold: string;
}

type FontFamilies = 'text' | 'title';

interface ISizes {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  bodyLarge: string;
  bodyMedium: string;
  bodySmall: string;
}

interface ITypography {
  family: Record<FontFamilies, IFamily>;
  sizes: ISizes;
}

const typography: ITypography = {
  sizes: {
    h1: '45px',
    h2: '35px',
    h3: '25px',
    h4: '20px',
    bodyLarge: '16px',
    bodyMedium: '14px',
    bodySmall: '12px',
  },
  family: {
    text: {
      thin: 'Roboto-Regular',
      regular: 'Roboto-Regular',
      bold: 'Roboto-Medium',
    },
    title: {
      thin: 'Roboto-Regular',
      regular: 'Roboto-Regular',
      bold: 'Roboto-Medium',
    },
  },
};

export default typography;
