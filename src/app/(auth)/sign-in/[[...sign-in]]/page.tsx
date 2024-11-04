'use client';

import { SignIn } from '@clerk/nextjs';
import { AuthCover } from '@/components/auth/AuthCover';
import { dark } from '@clerk/themes';
import { useTheme } from '@/hooks/useTheme';

const SignInPage = () => {
  const { isDark } = useTheme();

  return (
    <div className="col-span-12 h-screen grid grid-cols-1 justify-items-center lg:justify-items-start lg:grid-cols-[1fr_2fr] gap-10 row-span-3">
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
