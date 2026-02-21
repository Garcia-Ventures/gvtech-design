import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function CardDocs() {
  return (
    <>
      <ComponentShowcase
        title="Basic Card"
        description="A simple card with header and content."
        code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content goes here.</p>
  </CardContent>
</Card>`}
      />

      <ComponentShowcase
        title="Card with Footer"
        description="Cards can include a footer for actions."
        code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create Project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <h4 className="mt-6 text-lg font-medium">Card (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: isNative ? 'Tailwind (NativeWind) classes.' : 'Additional CSS classes.',
            },
          ]}
        />

        <p className="text-muted-foreground mt-4 text-sm">
          CardHeader, CardTitle, CardDescription, CardContent, and CardFooter also accept <code>className</code> and
          other standard {'HTML attributes'}.
        </p>
      </div>
    </>
  );
}
