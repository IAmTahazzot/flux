import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TrashIcon } from '@radix-ui/react-icons';

import {
  type FormValues,
  schemaFromDrizzle,
} from '@/features/account/types/account-types';

type AccountFormProps = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
};

export const AccountForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
}: AccountFormProps) => {
  const accountForm = useForm<FormValues>({
    resolver: zodResolver(schemaFromDrizzle),
    defaultValues: {
      name: defaultValues?.name || '',
    },
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
    accountForm.reset();
  };

  const handleDelete = () => onDelete?.();

  return (
    <>
      <Form {...accountForm}>
        <form onSubmit={accountForm.handleSubmit(handleSubmit)}>
          <FormField
            control={accountForm.control}
            name={'name'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={disabled}
                    placeholder={'e.g. Cash, Bank, Credit Card'}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-red-500">
                  {accountForm.formState.errors.name?.message}
                </FormDescription>
              </FormItem>
            )}
          />

          <Button type="submit" disabled={disabled} className="w-full mt-4">
            Create
          </Button>
          <Button type="button" variant="outline" className="mt-2 w-full">
            <TrashIcon className="w-4 h-4" />
            <span>Delete</span>
          </Button>
        </form>
      </Form>
    </>
  );
};
