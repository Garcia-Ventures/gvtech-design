import {
  PopoverAnchorBaseProps,
  PopoverBaseProps,
  PopoverContentBaseProps,
  PopoverTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { Modal, Pressable, View } from 'react-native';

import { cn } from './lib/utils';

const PopoverContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

const Popover = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & PopoverBaseProps
>(({ children, open, onOpenChange, ...props }, ref) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const setOpen = isControlled ? onOpenChange || (() => {}) : setInternalOpen;

  return (
    <PopoverContext.Provider value={{ open: isOpen, setOpen }}>
      <View ref={ref} {...props}>
        {children}
      </View>
    </PopoverContext.Provider>
  );
});
Popover.displayName = 'Popover';

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable> & PopoverTriggerBaseProps
>(({ children, ...props }, ref) => {
  const { setOpen } = React.useContext(PopoverContext);

  return (
    <Pressable ref={ref} onPress={() => setOpen(true)} {...props}>
      {children}
    </Pressable>
  );
});
PopoverTrigger.displayName = 'PopoverTrigger';

const PopoverAnchor = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & PopoverAnchorBaseProps
>(({ ...props }, ref) => <View ref={ref} {...props} />);
PopoverAnchor.displayName = 'PopoverAnchor';

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & PopoverContentBaseProps
>(({ className, children, ...props }, ref) => {
  const { open, setOpen } = React.useContext(PopoverContext);

  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
      <Pressable className="flex-1" onPress={() => setOpen(false)}>
        <View className="flex-1 items-center justify-center bg-black/50">
          <Pressable onPress={() => {}}>
            <View
              ref={ref}
              className={cn('bg-popover border-border mx-4 w-full max-w-sm rounded-md border p-4 shadow-lg', className)}
              {...props}
            >
              {children}
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
});
PopoverContent.displayName = 'PopoverContent';

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };
