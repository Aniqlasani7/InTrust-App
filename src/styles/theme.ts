export const theme = {
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    card: '#1E1E1E',        // ✅ ADD THIS
    primary: '#BB86FC',
    accent: '#03DAC6',
    text: '#FFFFFF',
    disabled: '#B0B0B0',
    error: '#CF6679',
  },
  fonts: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
};
