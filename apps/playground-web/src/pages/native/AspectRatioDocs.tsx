import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function AspectRatioDocs() {
  return (
    <>
      <ComponentShowcase
        title="16:9"
        description="A 16:9 aspect ratio container."
        code={`<div className="w-[450px]">
  <AspectRatio ratio={16 / 9} className="bg-muted">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800"
      alt="Photo by Drew Beamer"
      className="h-full w-full rounded-md object-cover"
    />
  </AspectRatio>
</div>`}
      />

      <ComponentShowcase
        title="Square (1:1)"
        description="A square aspect ratio container."
        code={`<div className="w-[200px]">
  <AspectRatio ratio={1 / 1} className="bg-muted rounded-md flex items-center justify-center">
    <span className="text-muted-foreground">1:1</span>
  </AspectRatio>
</div>`}
      />

      <ComponentShowcase
        title="4:3"
        description="A 4:3 aspect ratio container."
        code={`<div className="w-[300px]">
  <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
    <span className="text-muted-foreground">4:3</span>
  </AspectRatio>
</div>`}
      />
    </>
  );
}
