'use client';

import { UserProfile } from '@clerk/nextjs';
import { Header } from '@/components/header/header';

const Profile = () => {
  return (
    <>
      <Header />
      <UserProfile />
    </>
  );
};

export default Profile;
