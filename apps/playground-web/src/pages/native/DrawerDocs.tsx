import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function DrawerDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A responsive drawer."
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => onClick(-10)}
            disabled={goal <= 200}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <div className="flex-1 text-center">
            <div className="text-7xl font-bold tracking-tighter">
              {goal}
            </div>
            <div className="text-[0.70rem] uppercase text-muted-foreground">
              Calories/day
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => onClick(10)}
            disabled={goal >= 400}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
        <div className="mt-3 h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Bar
                dataKey="goal"
                style={
                  {
                    fill: "hsl(var(--foreground))",
                    opacity: 0.9,
                  } as React.CSSProperties
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Drawer component is built on top of{' '}
          <a href="https://github.com/emilkowalski/vaul" className="underline" target="_blank" rel="noreferrer">
            Vaul
          </a>
          .
        </p>
        <h4 className="text-lg font-medium mt-6">Drawer (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the drawer.',
            },
            {
              name: 'defaultOpen',
              type: 'boolean',
              description: 'The default open state when uncontrolled.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
            {
              name: 'shouldScaleBackground',
              type: 'boolean',
              defaultValue: 'true',
              description: 'Whether to scale the background when the drawer opens.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">DrawerTrigger</h4>
        <PropsTable
          props={[
            {
              name: 'asChild',
              type: 'boolean',
              description: 'Change the default rendered element for the one passed as a child.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">DrawerContent</h4>
        <PropsTable
          props={[
            {
              name: 'onEscapeKeyDown',
              type: '(event: KeyboardEvent) => void',
              description: 'Event handler called when the escape key is down.',
            },
            {
              name: 'onPointerDownOutside',
              type: '(event: PointerDownOutsideEvent) => void',
              description: 'Event handler called when a pointer event occurs outside the bounds of the component.',
            },
            {
              name: 'onInteractOutside',
              type: '(event: React.FocusEvent | MouseEvent | TouchEvent) => void',
              description:
                'Event handler called when an interaction (pointer or focus) happens outside the bounds of the component.',
            },
          ]}
        />
      </div>
    </>
  );
}
