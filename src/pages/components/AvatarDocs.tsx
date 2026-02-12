import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AvatarDocs() {
  return (
    <ComponentSection title="Avatar" description="An image element with a fallback for representing the user.">
      <ComponentShowcase
        title="Default"
        description="An avatar with an image."
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ComponentShowcase>

      <ComponentShowcase
        title="Fallback"
        description="When no image is available, the fallback is displayed."
        code={`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
      >
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>

        <h4 className="text-lg font-medium mt-6">Avatar (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">AvatarImage</h4>
        <PropsTable
          props={[
            {
              name: 'src',
              type: 'string',
              description: 'The URL of the image.',
            },
            {
              name: 'alt',
              type: 'string',
              description: 'The alternative text for the image.',
            },
            {
              name: 'onLoadingStatusChange',
              type: '(status: "idle" | "loading" | "loaded" | "error") => void',
              description: 'Event handler called when the loading status of the image changes.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">AvatarFallback</h4>
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
    </ComponentSection>
  );
}
