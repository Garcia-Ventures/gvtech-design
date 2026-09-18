import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function NativeFormDocs() {
  return (
    <>
      <ComponentShowcase
        title="Example"
        description="A full form example using react-hook-form and Zod validation on Native."
        code={`import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage, 
  Input, 
  Button, 
  Text 
} from '@gv-tech/design-system';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { View } from "react-native";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <View className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="eng618" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button onPress={form.handleSubmit(onSubmit)}>
          <Text className="text-white">Submit</Text>
        </Button>
      </View>
    </Form>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground">
          The Form components are wrappers around <code>react-hook-form</code>.
        </p>
        <PropsTable
          props={[
            {
              name: 'FormField',
              type: 'Component',
              description: 'A wrapper around the Controller component from react-hook-form.',
            },
            {
              name: 'FormItem',
              type: 'Component',
              description: 'A wrapper for a single form field, providing context for IDs and accessibility.',
            },
            {
              name: 'FormLabel',
              type: 'Component',
              description: 'The label for the form field.',
            },
            {
              name: 'FormControl',
              type: 'Component',
              description: 'The wrapper for the input component, handling ARIA attributes.',
            },
          ]}
        />
      </div>
    </>
  );
}
