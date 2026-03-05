import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
// @ts-nocheck

export function ScrollToTopDocs() {
  return (
    <>
      <ComponentShowcase
        title="Animated Scroll To Top (Native)"
        description="A floating action control for React Native that appears during scroll and animates off when clicked or scrolled back up."
        code={`import { ScrollToTop } from '@gv-tech/ui-native';
import { ScrollView, View } from 'react-native';

export function MyScreen() {
  const scrollRef = React.useRef<ScrollView>(null);
  const scrollToTopRef = React.useRef<any>(null);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        onScroll={(e) => scrollToTopRef.current?.handleScroll(e)}
      >
        {/* Long Content */}
        <View style={{ height: 2000 }} />
      </ScrollView>

      <ScrollToTop 
        ref={scrollToTopRef} 
        scrollRef={scrollRef} 
        threshold={200} 
      />
    </View>
  );
}`}
      />

      <ComponentShowcase
        title="Custom Animation"
        description="You can adjust the behavior and look using threshold and custom styling."
        code={`<ScrollToTop 
  ref={scrollToTopRef} 
  scrollRef={scrollRef}
  threshold={100}
  animationDuration={500}
  className="bg-primary/90 border-primary"
>
  <CustomIcon size={24} color="white" />
</ScrollToTop>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'threshold',
              type: 'number',
              defaultValue: '240',
              description: 'Scroll offset (y) before the button appears.',
            },
            {
              name: 'scrollRef',
              type: 'React.RefObject<ScrollView | FlatList>',
              description: 'Ref to the scrollable component to be controlled.',
            },
            {
              name: 'exitDuration',
              type: 'number',
              defaultValue: '450',
              description: 'Wait time before triggering the scroll to top (allows exit animation).',
            },
            {
              name: 'animationDuration',
              type: 'number',
              defaultValue: '300',
              description: 'Duration of the entrance/exit fade and slide animation.',
            },
            {
              name: 'label',
              type: 'string',
              defaultValue: '"Scroll to top"',
              description: 'Accessibility label for screen readers.',
            },
            {
              name: 'behavior',
              type: '"auto" | "smooth"',
              defaultValue: '"smooth"',
              description: 'Whether to animate the return to top.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes for the button.',
            },
          ]}
        />
      </div>
    </>
  );
}
