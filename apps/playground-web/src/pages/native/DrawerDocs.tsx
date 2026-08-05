import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function DrawerDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A responsive bottom sheet drawer for Native."
        code={`import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription, 
  DrawerFooter, 
  DrawerClose,
  Button,
  Text
} from '@gv-tech/design-system';
import { View } from "react-native";

export function DrawerExample() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Text>Open Drawer</Text>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <View className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <View className="p-4 pb-0">
             <Text className="text-center text-muted-foreground">
               This is a native bottom sheet implementation using Reanimated.
             </Text>
          </View>
          <DrawerFooter>
            <Button>
              <Text className="text-white">Submit</Text>
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">
                <Text>Cancel</Text>
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </View>
      </DrawerContent>
    </Drawer>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Drawer component for Native uses <code>@rn-primitives/dialog</code> and{' '}
          <code>react-native-reanimated</code> for animations.
        </p>
        <h4 className="mt-6 text-lg font-medium">Drawer (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'children',
              type: 'ReactNode',
              description: 'The content of the drawer.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">DrawerContent</h4>
        <PropsTable
          props={[
            {
              name: 'portalHost',
              type: 'string',
              description: 'Optional portal host to render into.',
            },
            {
              name: 'overlayClassName',
              type: 'string',
              description: 'Custom classes for the overlay.',
            },
          ]}
        />
      </div>
    </>
  );
}
