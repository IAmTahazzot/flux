import { SignUp } from '@clerk/nextjs';
import { AuthCover } from '@/components/auth/AuthCover';

const SignUpPage = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr] h-full">
      <AuthCover />
      <div className="grid place-items-center">
        <SignUp path="/sign-up" />
      </div>
    </div>
  );
};

export default SignUpPage;
