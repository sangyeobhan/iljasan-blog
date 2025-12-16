export const BLOG_TITLE = '일자산';

const COLORS = {
  '--color-text': 'hsl(0deg 0% 5%)',
  '--color-primary-500': 'hsl(120deg 35% 50%)',
  '--color-secondary-500': 'hsl(120deg 45% 70%)',
  '--color-decorative-100': 'white',
  '--color-decorative-300': 'hsl(0deg 0% 95%)',
  '--color-decorative-500': 'white',
  '--color-decorative-600': 'hsl(0deg 0% 90%)',
  '--color-decorative-700': 'hsl(0deg 0% 80%)',
  '--color-decorative-900': 'hsl(0deg 0% 40%)',
  '--color-gray-0': 'white',
  '--color-gray-300': 'hsl(95deg 12% 70%)',
  '--color-gray-500': 'hsl(95deg 8% 50%)',
  '--color-gray-700': 'hsl(95deg 12% 25%)',
  '--color-gray-900': 'hsl(95deg 18% 10%)',
};

// Semantic colors
COLORS['--color-primary'] = COLORS['--color-primary-500'];
COLORS['--color-secondary'] = COLORS['--color-secondary-500'];
COLORS['--color-inline-code-bg'] = 'hsl(92deg 85% 85%)';
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
    0px 2px 8px  hsl(95deg 25% 40% / 0.18),
    0px 18px 48px hsl(95deg 25% 40% / 0.14)
  `,
  '--shadow-card': `
    0px 1px 3px hsl(95deg 20% 40% / 0.14),
    0px 8px 20px hsl(95deg 20% 40% / 0.10)
  `,
};

export const TOKENS = {
  ...COLORS,
  ...SHADOWS,
};
