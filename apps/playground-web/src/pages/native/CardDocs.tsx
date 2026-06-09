import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function CardDocs() {
  return (
    <>
      <ComponentShowcase
        title="Basic Card"
        description="A simple card with header and content for Native."
        code={`import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  Text 
} from "@gv-tech/design-system";

export function CardExample() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Card Content goes here.</Text>
      </CardContent>
    </Card>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          Card components for Native are built using <code>View</code> and <code>Text</code>.
        </p>
        <h4 className="mt-6 text-lg font-medium">Card (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
