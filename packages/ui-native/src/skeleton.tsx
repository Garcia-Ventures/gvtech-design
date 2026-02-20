import * as React from 'react';
import { View } from 'react-native';
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
    opacity.value = withRepeat(
      withSequence(withTiming(0.2, { duration: 500 }), withTiming(0.5, { duration: 500 })),
      -1,
      true,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return <Animated.View className={cn('rounded-md bg-muted', className)} style={animatedStyle} {...props} />;
}

export { Skeleton };
