import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function AspectRatioDocs() {
  return (
    <ComponentSection title="Aspect Ratio" description="Displays content within a desired ratio.">
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
      >
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800"
              alt="Photo by Drew Beamer"
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Square (1:1)"
        description="A square aspect ratio container."
        code={`<div className="w-[200px]">
  <AspectRatio ratio={1 / 1} className="bg-muted rounded-md flex items-center justify-center">
    <span className="text-muted-foreground">1:1</span>
  </AspectRatio>
</div>`}
      >
        <div className="w-[200px]">
          <AspectRatio ratio={1 / 1} className="bg-muted rounded-md flex items-center justify-center">
            <span className="text-muted-foreground">1:1</span>
          </AspectRatio>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="4:3"
        description="A 4:3 aspect ratio container."
        code={`<div className="w-[300px]">
  <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
    <span className="text-muted-foreground">4:3</span>
  </AspectRatio>
</div>`}
      >
        <div className="w-[300px]">
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
            <span className="text-muted-foreground">4:3</span>
          </AspectRatio>
        </div>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'ratio',
              type: 'number',
              defaultValue: '1',
              description: 'The desired aspect ratio.',
            },
            {
              name: 'asChild',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Change the default rendered element for the one passed as a child.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
