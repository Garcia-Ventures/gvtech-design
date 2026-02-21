import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Avatar, AvatarFallback, AvatarImage } from '@gv-tech/ui-web';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

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
      >
        <Avatar>
          {<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />}
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

        <h4 className="mt-6 text-lg font-medium">Avatar (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: isNative ? 'Tailwind (NativeWind) classes.' : 'Additional CSS classes.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AvatarImage</h4>
        <PropsTable
          props={[
            {
              name: 'src',
              type: isNative ? 'ImageSourcePropType | string' : 'string',
              description: 'The image source.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AvatarFallback</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: isNative ? 'Tailwind (NativeWind) classes.' : 'Additional CSS classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
