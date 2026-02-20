import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function TabsDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default tabs component."
        code={`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password here. After saving, you'll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="current">Current password</Label>
          <Input id="current" type="password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="new">New password</Label>
          <Input id="new" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save password</Button>
      </CardFooter>
    </Card>
  </TabsContent>
</Tabs>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Tabs component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/tabs"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Tabs
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">Tabs (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'defaultValue',
              type: 'string',
              description: 'The value of the tab that should be active when initially rendered.',
            },
            {
              name: 'value',
              type: 'string',
              description: 'The controlled value of the tab to activate.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when the value changes.',
            },
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              defaultValue: '"horizontal"',
              description: 'The orientation of the tabs.',
            },
            {
              name: 'dir',
              type: '"ltr" | "rtl"',
              description: 'The reading direction of the tabs.',
            },
            {
              name: 'activationMode',
              type: '"automatic" | "manual"',
              defaultValue: '"automatic"',
              description:
                'When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">TabsList</h4>
        <PropsTable
          props={[
            {
              name: 'loop',
              type: 'boolean',
              defaultValue: 'true',
              description: 'When true, keyboard navigation will loop from last tab to first, and vice versa.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">TabsTrigger</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              required: true,
              description: 'A unique value for the trigger.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with the tab.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">TabsContent</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              required: true,
              description: 'A unique value for the content.',
            },
            {
              name: 'forceMount',
              type: 'boolean',
              description: 'Used to force mounting when more control is needed.',
            },
          ]}
        />
      </div>
    </>
  );
}
