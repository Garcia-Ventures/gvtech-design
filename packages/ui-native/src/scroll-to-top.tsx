'use client';

import { ArrowUp } from 'lucide-react-native';
import * as React from 'react';
import {
  AccessibilityInfo,
  Animated,
  type FlatList,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  Platform,
  ScrollView,
  View,
} from 'react-native';

import type { ScrollToTopBaseProps } from '@gv-tech/ui-core';
import { Button } from './button';
import { cn } from './lib/utils';

export interface ScrollToTopProps extends ScrollToTopBaseProps {
  /**
   * For Native: The scroll target is typically a ref to a ScrollView or FlatList.
   * This is required unless you manually call the scroll handler.
   */
  scrollRef?: React.RefObject<ScrollView | FlatList>;

  /**
   * Custom duration specifically for Native animations (opacity/transform).
   * @default 300
   */
  animationDuration?: number;
}

/**
 * GV Tech Animated Scroll To Top (Native)
 *
 * A floating action button that appears when scrolling down and allows the user
 * to quickly return to the top of a ScrollView, FlatList, or SectionList.
 *
 * Reuses the internal GV Tech Button primitive for consistent styling.
 */
export interface ScrollToTopHandle {
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  scrollToTop: () => void;
}

export const ScrollToTop = React.forwardRef<ScrollToTopHandle, ScrollToTopProps>(
  (
    {
      threshold = 240,
      exitDuration = 450,
      behavior, // Native uses 'smooth' or just scrolls
      label = 'Scroll to top',
      className,
      scrollRef,
      animationDuration = 300,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isExiting, setIsExiting] = React.useState(false);

    // Animation states
    const opacity = React.useRef(new Animated.Value(0)).current;
    const translateY = React.useRef(new Animated.Value(20)).current;

    const animateIn = () => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: true,
        }),
      ]).start();
    };

    const animateOut = () => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 20,
          duration: animationDuration,
          useNativeDriver: true,
        }),
      ]).start(() => {
        if (!isExiting) {
          setIsVisible(false);
        }
      });
    };

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offset = event.nativeEvent.contentOffset.y;

      if (isExiting) {
        if (offset <= threshold) {
          setIsVisible(false);
          setIsExiting(false);
        }
        return;
      }

      if (offset > threshold && !isVisible) {
        setIsVisible(true);
        animateIn();
      } else if (offset <= threshold && isVisible) {
        animateOut();
      }
    };

    const scrollToTop = () => {
      setIsExiting(true);
      animateOut();

      // Delay the actual scroll to let exit animation start
      setTimeout(() => {
        if (scrollRef?.current) {
          // Detect if it's a FlatList or ScrollView
          if (typeof scrollRef.current.scrollToOffset === 'function') {
            scrollRef.current.scrollToOffset({ offset: 0, animated: behavior !== 'auto' });
          } else if (typeof scrollRef.current.scrollTo === 'function') {
            scrollRef.current.scrollTo({ y: 0, animated: behavior !== 'auto' });
          }
        }

        // Announcements for accessibility
        if (Platform.OS === 'ios' || Platform.OS === 'android') {
          AccessibilityInfo.announceForAccessibility('Scrolled to top');
        }
      }, exitDuration);
    };

    // Expose handleScroll so parents can pipe their scroll events to this component
    React.useImperativeHandle(ref, () => ({
      handleScroll,
      scrollToTop,
    }));

    if (!isVisible && !isExiting) {
      return null;
    }

    return (
      <View
        pointerEvents="box-none"
        style={{
          position: 'absolute',
          bottom: 24,
          right: 24,
          zIndex: 50,
        }}
      >
        <Animated.View
          style={{
            opacity,
            transform: [{ translateY }],
          }}
        >
          <Button
            variant="outline"
            size="icon"
            className={cn('bg-background/80 h-12 w-12 rounded-full border-2 shadow-lg', className)}
            onPress={scrollToTop}
            aria-label={label}
            {...props}
          >
            <ArrowUp size={24} className="text-foreground" />
          </Button>
        </Animated.View>
      </View>
    );
  },
);

ScrollToTop.displayName = 'ScrollToTop';
