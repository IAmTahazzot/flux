'use client';

import { SignIn } from '@clerk/nextjs';
import { AuthCover } from '@/components/auth/AuthCover';
import { dark } from '@clerk/themes';
import { useTheme } from '@/hooks/useTheme';

const SignInPage = () => {
  const { isDark } = useTheme();

  return (
    <div className="grid grid-cols-[1fr_2fr] lg:grid-cols-[400px_2fr] gap-10 h-full">
      <AuthCover />
      <div className="grid items-center">
        <SignIn
          path="/sign-in"
          appearance={{
            baseTheme: isDark ? dark : undefined,
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
