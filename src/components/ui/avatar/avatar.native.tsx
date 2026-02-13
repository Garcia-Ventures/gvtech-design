import * as React from 'react';
import { Image, View } from 'react-native';

import { cn } from '@/lib/utils';

const AvatarContext = React.createContext<{ hasError: boolean; setHasError: (val: boolean) => void }>({
  hasError: false,
  setHasError: () => {},
});

const Avatar = React.forwardRef<React.ElementRef<typeof View>, React.ComponentPropsWithoutRef<typeof View>>(
  ({ className, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);
    return (
      <AvatarContext.Provider value={{ hasError, setHasError }}>
        <View
          ref={ref}
          className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
          {...props}
        />
      </AvatarContext.Provider>
    );
  },
);
Avatar.displayName = 'Avatar';

const AvatarImage = React.forwardRef<React.ElementRef<typeof Image>, React.ComponentPropsWithoutRef<typeof Image>>(
  ({ className, ...props }, ref) => {
    const { setHasError } = React.useContext(AvatarContext);
    return (
      <Image
        ref={ref}
        className={cn('aspect-square h-full w-full', className)}
        onError={() => setHasError(true)}
        {...props}
      />
    );
  },
);
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<React.ElementRef<typeof View>, React.ComponentPropsWithoutRef<typeof View>>(
  ({ className, ...props }, ref) => {
    const { hasError } = React.useContext(AvatarContext);

    if (!hasError) return null;

    return (
      <View
        ref={ref}
        className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
        {...props}
      />
    );
  },
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarFallback, AvatarImage };
