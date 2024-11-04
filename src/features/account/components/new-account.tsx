import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { AccountForm } from './account-form';
import type { FormValues } from '@/features/account/types/account-types';
import { useNewAccount } from '@/features/account/hooks/use-new-account';
import { useCreateAccount } from '@/features/account/api/use-create-account';

export const NewAccount = () => {
  const { isOpen, onClose } = useNewAccount();

  const mutation = useCreateAccount();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="overflow-y-auto w-full space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>Create a new account</SheetDescription>
        </SheetHeader>
        <AccountForm onSubmit={onSubmit} />
      </SheetContent>
    </Sheet>
  );
};
