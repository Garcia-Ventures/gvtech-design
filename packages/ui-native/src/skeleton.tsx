import * as React from 'react';
import type { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { cn } from './lib/utils';

function Skeleton({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) {
  const opacity = useSharedValue(0.5);

  React.useEffect(() => {
    // Shared values are stable across renders; mutation here drives the Reanimated loop
    // eslint-disable-next-line react/immutability
    opacity.value = withRepeat(
      withSequence(withTiming(0.2, { duration: 500 }), withTiming(0.5, { duration: 500 })),
      -1,
      true,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return <Animated.View className={cn('bg-muted rounded-md', className)} style={animatedStyle} {...props} />;
}

export { Skeleton };
