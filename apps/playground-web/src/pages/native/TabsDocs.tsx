import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function TabsDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default tabs component for Native."
        code={`import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Text,
  Input,
  Label
} from "@gv-tech/design-system";
import { View } from "react-native";

export function TabsExample() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex flex-row w-full">
        <TabsTrigger value="account" className="flex-1">
          <Text>Account</Text>
        </TabsTrigger>
        <TabsTrigger value="password" className="flex-1">
          <Text>Password</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <View className="space-y-1">
              <Label nativeID="name">Name</Label>
              <Input nativeID="name" defaultValue="Pedro Duarte" />
            </View>
          </CardContent>
          <CardFooter>
            <Button><Text className="text-white">Save changes</Text></Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Tabs component for Native is built on top of <code>@rn-primitives/tabs</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">Tabs (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              description: 'The controlled value of the active tab.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when the value changes.',
            },
          ]}
        />
      </div>
    </>
  );
}
