import { SignIn } from '@clerk/nextjs';
import { AuthCover } from '@/components/auth/AuthCover';

const SignInPage = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr] h-full">
      <AuthCover />
      <div className="grid place-items-center">
        <SignIn path="/sign-in" />
      </div>
    </div>
  );
};

export default SignInPage;
