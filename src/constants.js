export const BLOG_TITLE = '일자산';

const COLORS = {
  '--color-text': 'hsl(0deg 0% 5%)',
  '--color-primary-500': 'hsl(245deg 100% 60%)',
  '--color-secondary-500': 'hsl(328deg 100% 50%)',
  '--color-decorative-100': 'white',
  '--color-decorative-300': 'hsl(0deg 0% 95%)',
  '--color-decorative-500': 'white',
  '--color-decorative-600': 'hsl(0deg 0% 90%)',
  '--color-decorative-700': 'hsl(0deg 0% 80%)',
  '--color-decorative-900': 'hsl(0deg 0% 40%)',
  '--color-gray-0': 'white',
  '--color-gray-300': 'hsl(50deg 10% 70%)',
  '--color-gray-500': 'hsl(50deg 4% 50%)',
  '--color-gray-700': 'hsl(50deg 10% 25%)',
  '--color-gray-900': 'hsl(50deg 20% 10%)',
};

// Semantic colors
COLORS['--color-primary'] = COLORS['--color-primary-500'];
COLORS['--color-secondary'] = COLORS['--color-secondary-500'];
COLORS['--color-inline-code-bg'] = 'hsl(45deg 74% 85%)';
COLORS['--color-selection-text'] = 'black';
COLORS['--color-selection-background'] = COLORS['--color-decorative-700'];
COLORS['--color-backdrop'] = COLORS['--color-decorative-500'];
COLORS['--color-backdrop-highlight'] = COLORS['--color-decorative-300'];
COLORS['--color-page-background'] = COLORS['--color-decorative-100'];
COLORS['--color-page-border'] = 'transparent';
COLORS['--color-card-background'] = COLORS['--color-gray-0'];
COLORS['--color-card-border'] = 'transparent';

const SHADOWS = {
  '--shadow-page': `
    0px 1px 2px hsl(50deg 60% 50% / 0.25),
    0px 3px 6px hsl(50deg 60% 50% / 0.25),
    0px 9px 18px hsl(50deg 60% 50% / 0.25),
    0px 18px 36px hsl(50deg 60% 50% / 0.25),
    0px 54px 108px hsl(50deg 60% 50% / 0.25)
  `,
  '--shadow-card': `
    0px 1px 2px hsl(50deg 20% 50% / 0.2),
    0px 2px 4px hsl(50deg 20% 50% / 0.2),
    0px 4px 8px hsl(50deg 20% 50% / 0.2),
    0px 8px 16px hsl(50deg 20% 50% / 0.2)
  `,
};

export const TOKENS = {
  ...COLORS,
  ...SHADOWS,
};
