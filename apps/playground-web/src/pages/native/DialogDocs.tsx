import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function DialogDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A basic dialog with a trigger and content for Native."
        code={`import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter,
  Button,
  Text,
  Input,
  Label
} from "@gv-tech/design-system";
import { View } from "react-native";

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Text>Edit Profile</Text>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <View className="space-y-4 py-4">
          <View className="flex flex-row items-center space-x-4">
            <Label nativeID="name" className="text-right w-20">Name</Label>
            <Input nativeID="name" defaultValue="Pedro Duarte" className="flex-1" />
          </View>
        </View>
        <DialogFooter>
          <Button onPress={() => console.log("saved")}>
            <Text className="text-white">Save changes</Text>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Dialog component for Native is built on top of <code>@rn-primitives/dialog</code>.
        </p>
        <h4 className="mt-6 text-lg font-medium">Dialog (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the dialog.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">DialogContent</h4>
        <PropsTable
          props={[
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
