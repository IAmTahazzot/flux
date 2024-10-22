'use client';

import Image from 'next/image';
import brand from '@/../docs/brand.svg';
import Link from 'next/link';
import { Button } from '../ui/button';
import { redirect, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SignOutButton, UserProfile, useUser } from '@clerk/nextjs';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

export const Header = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const path = usePathname();
  const isDashboard = path === '/';

  if (isLoaded && !isSignedIn) {
    redirect('/sign-in');
  }

  return (
    <>
      <header className="col-span-12 grid grid-cols-12 items-center h-20 px-4 bg-white">
        <div className="col-span-6 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={brand} alt="Flux brand" height={32} width={32} />
            <h1 className="text-2xl font-bold font-koho">Flux</h1>
          </Link>

          <nav className="ml-10">
            <ul className="flex items-center text-sm font-medium">
              <li>
                <Button
                  variant={'link'}
                  className={cn(isDashboard && 'underline font-bold')}
                  asChild
                >
                  <Link href="/">Dashboard</Link>
                </Button>
              </li>
              <li>
                <Button variant={'link'} asChild>
                  <Link href="/portfolio">My Portfolio</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-6">
          <div className="flex items-center gap-4 justify-end">
            <div>
              {isLoaded ? (
                isSignedIn && (
                  <Menubar className="border-0 shadow-none">
                    <MenubarMenu>
                      <MenubarTrigger asChild>
                        <Button
                          variant={'ghost'}
                          className="flex items-center px-2 h-11 rounded-md"
                        >
                          <Image
                            src={user.imageUrl}
                            alt="User avatar"
                            height={36}
                            width={36}
                            className="rounded-full object-cover h-9 w-9"
                          />
                          <h2 className="font-medium">{user.fullName}</h2>
                          <ChevronDownIcon />
                        </Button>
                      </MenubarTrigger>
                      <MenubarContent
                        sideOffset={5}
                        align="end"
                        className="min-w-[250px]"
                      >
                        <MenubarItem className="px-4 py-[10px]" asChild>
                          <Link href="/profile">
                            {/* New Tab <MenubarShortcut>⌘T</MenubarShortcut> */}
                            Profile
                          </Link>
                        </MenubarItem>

                        <MenubarItem className="px-4 py-[10px]">
                          New Window
                        </MenubarItem>
                        <MenubarSeparator />
                        <SignOutButton
                          signOutOptions={{
                            redirectUrl: '/sign-in',
                          }}
                        >
                          <MenubarItem className="px-4 py-[10px]">
                            Sign Out
                          </MenubarItem>
                        </SignOutButton>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                )
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
