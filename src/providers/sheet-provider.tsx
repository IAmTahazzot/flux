'use client';

import { NewAccount } from '@/features/account/components/new-account';

type SheetProviderType = {
  children?: React.ReactNode;
};

export const SheetProvider = ({ children }: SheetProviderType) => {
  return (
    <>
      <NewAccount />
      {children}
    </>
  );
};
