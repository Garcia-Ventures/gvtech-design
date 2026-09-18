import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function CollapsibleDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A collapsible panel for Native."
        code={`import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent,
  Button,
  Text 
} from "@gv-tech/design-system";
import { View } from "react-native";
import { ChevronsUpDown } from "lucide-react-native";

export function CollapsibleExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[300px] space-y-2">
      <View className="flex flex-row items-center justify-between px-4">
        <Text className="text-sm font-semibold">@peduarte starred 3 repositories</Text>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown size={16} className="text-foreground" />
          </Button>
        </CollapsibleTrigger>
      </View>
      <View className="rounded-md border px-4 py-3">
        <Text className="font-mono text-sm">@radix-ui/primitives</Text>
      </View>
      <CollapsibleContent className="space-y-2">
        <View className="rounded-md border px-4 py-3">
          <Text className="font-mono text-sm">@radix-ui/colors</Text>
        </View>
      </CollapsibleContent>
    </Collapsible>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Collapsible component for Native is built on top of <code>@rn-primitives/collapsible</code>.
        </p>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the collapsible.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents interaction.',
            },
          ]}
        />
      </div>
    </>
  );
}
