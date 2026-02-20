import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function AvatarDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="An avatar with an image."
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      />

      <ComponentShowcase
        title="Fallback"
        description="When no image is available, the fallback is displayed."
        code={`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>

        <h4 className="text-lg font-medium mt-6">Avatar (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: isNative ? 'Tailwind (NativeWind) classes.' : 'Additional CSS classes.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">AvatarImage</h4>
        <PropsTable
          props={[
            {
              name: 'src',
              type: isNative ? 'ImageSourcePropType | string' : 'string',
              description: 'The image source.',
            },
            ...[
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
            ],
          ]}
        />

        <h4 className="text-lg font-medium mt-6">AvatarFallback</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: isNative ? 'Tailwind (NativeWind) classes.' : 'Additional CSS classes.',
            },
            ...[
              {
                name: 'delayMs',
                type: 'number',
                description: 'Useful for delaying rendering so it only appears for those with slower connections.',
              },
            ],
          ]}
        />
      </div>
    </>
  );
}
