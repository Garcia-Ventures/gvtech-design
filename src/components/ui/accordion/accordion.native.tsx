import { ChevronDown } from 'lucide-react-native';
import * as React from 'react';
import { LayoutAnimation, Platform, Pressable, Text, UIManager, View } from 'react-native';

import { cn } from '@/lib/utils';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AccordionContext = React.createContext<{
  openItems: string[];
  toggleItem: (value: string) => void;
  type: 'single' | 'multiple';
}>({
  openItems: [],
  toggleItem: () => {},
  type: 'single',
});

const Accordion = ({
  type = 'single',
  defaultValue,
  value,
  onValueChange,
  children,
  className,
}: {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const [internalOpenItems, setInternalOpenItems] = React.useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : [],
  );

  const openItems = value !== undefined ? (Array.isArray(value) ? value : [value]) : internalOpenItems;

  const toggleItem = React.useCallback(
    (itemValue: string) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      let newItems: string[];
      if (type === 'single') {
        newItems = openItems.includes(itemValue) ? [] : [itemValue];
      } else {
        newItems = openItems.includes(itemValue) ? openItems.filter((i) => i !== itemValue) : [...openItems, itemValue];
      }

      if (value === undefined) {
        setInternalOpenItems(newItems);
      }
      onValueChange?.(type === 'single' ? newItems[0] || '' : newItems);
    },
    [openItems, type, value, onValueChange],
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <View className={cn('w-full', className)}>{children}</View>
    </AccordionContext.Provider>
  );
};

const AccordionItemContext = React.createContext<{ value: string }>({ value: '' });

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & { value: string }
>(({ className, value, ...props }, ref) => (
  <AccordionItemContext.Provider value={{ value }}>
    <View ref={ref} className={cn('border-b border-border', className)} {...props} />
  </AccordionItemContext.Provider>
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable>
>(({ className, children, ...props }, ref) => {
  const { openItems, toggleItem } = React.useContext(AccordionContext);
  const { value } = React.useContext(AccordionItemContext);
  const isOpen = openItems.includes(value);

  return (
    <Pressable
      ref={ref}
      onPress={() => toggleItem(value)}
      className={cn('flex-row items-center justify-between py-4', className)}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text className="text-sm font-medium text-foreground">{children}</Text>
      ) : (
        (children as React.ReactNode)
      )}
      <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
        <ChevronDown size={16} className="text-muted-foreground" />
      </View>
    </Pressable>
  );
});
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<React.ElementRef<typeof View>, React.ComponentPropsWithoutRef<typeof View>>(
  ({ className, children, ...props }, ref) => {
    const { openItems } = React.useContext(AccordionContext);
    const { value } = React.useContext(AccordionItemContext);
    const isOpen = openItems.includes(value);

    if (!isOpen) return null;

    return (
      <View ref={ref} className={cn('pb-4 pt-0', className)} {...props}>
        <Text className="text-sm text-foreground">{children}</Text>
      </View>
    );
  },
);
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
