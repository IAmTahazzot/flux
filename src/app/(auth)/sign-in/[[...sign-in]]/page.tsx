'use client';

import { SignIn } from '@clerk/nextjs';
import { AuthCover } from '@/components/auth/AuthCover';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

const SignInPage = () => {
  const { theme, systemTheme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <div className="grid grid-cols-[1fr_2fr] h-full">
      <AuthCover />
      <div className="grid place-items-center">
        <SignIn path="/sign-in" appearance={{
          baseTheme: isDark ? dark : undefined
        }} />
      </div>
    </div>
  );
};

SignInPage.theme = 'dark'

export default SignInPage;
