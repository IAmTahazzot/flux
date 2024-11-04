'use client';

import { Header } from '@/components/header/header';
import { UserProfile } from '@clerk/nextjs';

const Profile = () => {
  return (
    <>
      <Header />
      <UserProfile />
    </>
  );
};

export default Profile;
