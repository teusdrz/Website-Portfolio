export const theme = {
  colors: {
    background: '#1A1A1A',
    surface: '#2A2A2A',
    primary: '#50FF6C',
    text: {
      primary: '#FFFFFF',
      secondary: '#9CA3AF',
    },
    border: '#3A3A3A',
  },
  typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    sizes: {
      large: '47px',
      medium: '23px',
      small: '16px',
    },
    weights: {
      semibold: 600,
      regular: 400,
    },
    lineHeights: {
      large: '110%',
      medium: '132%',
      small: '150%',
    },
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '64px',
  },
  borderRadius: {
    sm: '8px',
    md: '15px',
    lg: '24px',
    full: '50%',
  },
  shadows: {
    button: '0 4px 16px rgba(80, 255, 108, 0.3)',
  },
} as const;
