import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function SheetDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default sheet for Native."
        code={`import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription, 
  SheetFooter,
  SheetClose,
  Button,
  Text,
  Input,
  Label
} from "@gv-tech/design-system";
import { View } from "react-native";

export function SheetExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Text>Open Sheet</Text>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <View className="space-y-4 py-4">
          <View className="flex flex-row items-center space-x-4">
            <Label nativeID="name" className="text-right w-20">Name</Label>
            <Input nativeID="name" defaultValue="Pedro Duarte" className="flex-1" />
          </View>
        </View>
        <SheetFooter>
          <SheetClose asChild>
            <Button>
              <Text className="text-white">Save changes</Text>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Sheet component for Native is built on top of <code>@rn-primitives/dialog</code> and supports multiple
          sides.
        </p>

        <h4 className="mt-6 text-lg font-medium">Sheet (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the sheet.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">SheetContent</h4>
        <PropsTable
          props={[
            {
              name: 'side',
              type: '"top" | "bottom" | "left" | "right"',
              defaultValue: '"right"',
              description: 'The side of the screen where the sheet appears.',
            },
            {
              name: 'portalHost',
              type: 'string',
              description: 'Optional portal host to render into.',
            },
          ]}
        />
      </div>
    </>
  );
}
