'use client';

import { Header } from '@/components/header/header';
import { Button } from '@/components/ui/button';
import { useNewAccount } from '@/features/account/hooks/use-new-account';
import { PlusIcon } from '@radix-ui/react-icons';

const Home = () => {
  const { onOpen } = useNewAccount();

  return (
    <>
      <Header />
      <h1 className="col-span-full text-4xl text-slate-300 font-medium tracking-tighter px-4">
        Dashboard
      </h1>

      <div className="col-span-6 px-4">
        <Button onClick={onOpen} variant={'outline'}>
          <PlusIcon width={18} height={18} />
          <span className="ml-2">Create new</span>
        </Button>
      </div>
    </>
  );
};

export default Home;
