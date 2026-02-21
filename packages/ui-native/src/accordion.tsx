import * as AccordionPrimitive from '@rn-primitives/accordion';
import { ChevronDown } from 'lucide-react-native';
import * as React from 'react';
import { View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { cn } from './lib/utils';

const Accordion: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
    React.RefAttributes<React.ElementRef<typeof AccordionPrimitive.Root>>
> = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <AccordionPrimitive.Root ref={ref} className={cn('web:gap-0', className)} {...props} />;
});
Accordion.displayName = AccordionPrimitive.Root?.displayName || 'Accordion';

const AccordionItem: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> &
    React.RefAttributes<React.ElementRef<typeof AccordionPrimitive.Item>>
> = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item ref={ref} className={cn('border-border overflow-hidden border-b', className)} {...props} />
  );
});
AccordionItem.displayName = AccordionPrimitive.Item?.displayName || 'AccordionItem';

const AccordionHeader: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header> &
    React.RefAttributes<React.ElementRef<typeof AccordionPrimitive.Header>>
> = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Header>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>
>(({ className, ...props }, ref) => {
  return <AccordionPrimitive.Header ref={ref} className={cn('flex flex-row', className)} {...props} />;
});
AccordionHeader.displayName = AccordionPrimitive.Header?.displayName || 'AccordionHeader';

const AccordionTrigger: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
    React.RefAttributes<React.ElementRef<typeof AccordionPrimitive.Trigger>>
> = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { isExpanded } = AccordionPrimitive.useItemContext();
  const progress = useDerivedValue(() =>
    isExpanded ? withTiming(1, { duration: 250 }) : withTiming(0, { duration: 200 }),
  );
  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 180}deg` }],
    opacity: interpolate(progress.value, [0, 1], [1, 0.8], Extrapolation.CLAMP),
  }));

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-row items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        <>{children}</>
        <Animated.View style={chevronStyle}>
          <ChevronDown className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
        </Animated.View>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger?.displayName || 'AccordionTrigger';

const AccordionContent: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> &
    React.RefAttributes<React.ElementRef<typeof AccordionPrimitive.Content>>
> = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all',
        className,
      )}
      {...props}
    >
      <View className={cn('pt-0 pb-4', className)}>{children}</View>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content?.displayName || 'AccordionContent';

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
