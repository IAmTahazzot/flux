import { useTheme as useNextTheme } from 'next-themes';

export const useTheme = () => {
  const { theme, systemTheme } = useNextTheme();
  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return {
    ...useNextTheme(),
    isDark
  };
};
