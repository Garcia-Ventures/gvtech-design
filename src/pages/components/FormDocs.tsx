import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
    <ComponentSection title="Form" description="Building forms with React Hook Form and Zod.">
      <ComponentShowcase
        title="Default"
        description="A simple form with validation."
        code={`"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

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
        <p className="text-sm text-muted-foreground">
          The Form component is built on top of{' '}
          <a href="https://react-hook-form.com/" className="underline" target="_blank" rel="noreferrer">
            React Hook Form
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">FormField</h4>
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

        <h4 className="text-lg font-medium mt-6">FormItem</h4>
        <p className="text-sm text-muted-foreground">Context provider for form fields.</p>

        <h4 className="text-lg font-medium mt-6">FormLabel</h4>
        <p className="text-sm text-muted-foreground">Wrapper around Label with error state handling.</p>

        <h4 className="text-lg font-medium mt-6">FormControl</h4>
        <p className="text-sm text-muted-foreground">Wrapper around the input element to handle accessibility.</p>

        <h4 className="text-lg font-medium mt-6">FormDescription</h4>
        <p className="text-sm text-muted-foreground">Helper text for the field.</p>

        <h4 className="text-lg font-medium mt-6">FormMessage</h4>
        <p className="text-sm text-muted-foreground">Displays error messages.</p>
      </div>
    </ComponentSection>
  );
}
