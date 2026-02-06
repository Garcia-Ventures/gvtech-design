import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const works = [
  { artist: 'Ornella Binni', art: 'Reflection' },
  { artist: 'Tom Byrom', art: 'Mountain View' },
  { artist: 'Vladimir Malyavko', art: 'Harmony' },
  { artist: 'Magicle', art: 'Dreams' },
];

export function ScrollAreaDocs() {
  return (
    <ComponentSection
      title="Scroll Area"
      description="Augments native scroll functionality for custom, cross-browser styling."
    >
      <ComponentShowcase
        title="Vertical"
        description="A vertically scrolling area."
        code={`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <>
        <div key={tag} className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </ComponentShowcase>

      <ComponentShowcase
        title="Horizontal"
        description="A horizontally scrolling area."
        code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {works.map((work) => (
      <figure key={work.artist} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <div className="h-[150px] w-[150px] bg-muted flex items-center justify-center">
            {work.art}
          </div>
        </div>
        <figcaption className="pt-2 text-xs text-muted-foreground">
          Photo by <span className="font-semibold text-foreground">{work.artist}</span>
        </figcaption>
      </figure>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
      >
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {works.map((work) => (
              <figure key={work.artist} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <div className="h-[150px] w-[150px] bg-muted flex items-center justify-center text-sm">
                    {work.art}
                  </div>
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by <span className="font-semibold text-foreground">{work.artist}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </ComponentShowcase>
    </ComponentSection>
  );
}
