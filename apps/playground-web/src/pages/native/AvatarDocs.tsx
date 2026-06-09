import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function AvatarDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="An avatar with an image on Native."
        code={`import { Avatar, AvatarImage, AvatarFallback, Text } from "@gv-tech/design-system";

export function AvatarExample() {
  return (
    <Avatar>
      <AvatarImage source={{ uri: "https://github.com/shadcn.png" }} />
      <AvatarFallback>
        <Text>CN</Text>
      </AvatarFallback>
    </Avatar>
  );
}`}
      />

      <ComponentShowcase
        title="Fallback"
        description="When no image is available, the fallback is displayed."
        code={`import { Avatar, AvatarFallback, Text } from "@gv-tech/design-system";

export function AvatarFallbackExample() {
  return (
    <Avatar>
      <AvatarFallback>
        <Text>JD</Text>
      </AvatarFallback>
    </Avatar>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Avatar component for Native is built on top of <code>@rn-primitives/avatar</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">Avatar (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AvatarImage</h4>
        <PropsTable
          props={[
            {
              name: 'source',
              type: 'ImageSourcePropType',
              description: 'The image source.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AvatarFallback</h4>
        <PropsTable
          props={[
            {
              name: 'delayMs',
              type: 'number',
              description: 'Useful for delaying rendering so it only appears for those with slower connections.',
            },
          ]}
        />
      </div>
    </>
  );
}
