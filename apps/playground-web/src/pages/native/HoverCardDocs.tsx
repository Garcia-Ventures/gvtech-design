import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function HoverCardDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A hover card (tap to open on mobile) for Native."
        code={`import { 
  HoverCard, 
  HoverCardTrigger, 
  HoverCardContent,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  Text
} from '@gv-tech/design-system';
import { View } from 'react-native';

export function HoverCardExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <Text>@nextjs</Text>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <View className="flex flex-row justify-between space-x-4">
          <Avatar>
            <AvatarImage source={{ uri: "https://github.com/vercel.png" }} />
            <AvatarFallback><Text>VC</Text></AvatarFallback>
          </Avatar>
          <View className="flex-1 space-y-1">
            <Text className="text-sm font-semibold">@nextjs</Text>
            <Text className="text-sm">
              The React Framework – created and maintained by @vercel.
            </Text>
          </View>
        </View>
      </HoverCardContent>
    </HoverCard>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The HoverCard component for Native is built on top of <code>@rn-primitives/hover-card</code>. Note: On touch
          devices, this component behaves as a tap-to-toggle.
        </p>

        <h4 className="mt-6 text-lg font-medium">HoverCard (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the hover card.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
          ]}
        />
      </div>
    </>
  );
}
