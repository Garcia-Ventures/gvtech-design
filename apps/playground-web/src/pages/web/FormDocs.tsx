import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@gv-tech/ui-web';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export function FormDocs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A simple form with validation."
        code={`"use client"


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@gv-tech/ui-web"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Form component is built on top of{' '}
          <a href="https://react-hook-form.com/" className="underline" target="_blank" rel="noreferrer">
            React Hook Form
          </a>
          .
        </p>

        <h4 className="mt-6 text-lg font-medium">FormField</h4>
        <PropsTable
          props={[
            {
              name: 'control',
              type: 'Control<TFieldValues>',
              description: 'The control object from useForm.',
            },
            {
              name: 'name',
              type: 'FieldPath<TFieldValues>',
              description: 'The name of the field.',
            },
            {
              name: 'render',
              type: '({ field }) => React.ReactElement',
              description: 'Render prop for the field.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">FormItem</h4>
        <p className="text-muted-foreground text-sm">Context provider for form fields.</p>

        <h4 className="mt-6 text-lg font-medium">FormLabel</h4>
        <p className="text-muted-foreground text-sm">Wrapper around Label with error state handling.</p>

        <h4 className="mt-6 text-lg font-medium">FormControl</h4>
        <p className="text-muted-foreground text-sm">Wrapper around the input element to handle accessibility.</p>

        <h4 className="mt-6 text-lg font-medium">FormDescription</h4>
        <p className="text-muted-foreground text-sm">Helper text for the field.</p>

        <h4 className="mt-6 text-lg font-medium">FormMessage</h4>
        <p className="text-muted-foreground text-sm">Displays error messages.</p>
      </div>
    </>
  );

  // @ts-ignore

  const isNative = false as boolean;

  // @ts-ignore

  const platform = 'web' as string;
}
