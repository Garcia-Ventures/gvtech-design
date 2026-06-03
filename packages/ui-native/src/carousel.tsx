import type {
  CarouselBaseProps,
  CarouselContentBaseProps,
  CarouselItemBaseProps,
  CarouselNextBaseProps,
  CarouselPreviousBaseProps,
} from '@gv-tech/ui-core';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import * as React from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  type LayoutChangeEvent,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { Button } from './button';
import { cn } from './lib/utils';
type CarouselApi = unknown;

type CarouselContextType = {
  orientation: 'horizontal' | 'vertical';
  scrollRef: React.RefObject<ScrollView>;
  scrollNext: () => void;
  scrollPrev: () => void;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  itemWidth: number;
  setItemWidth: (width: number) => void;
};

const CarouselContext = React.createContext<CarouselContextType | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

export type CarouselProps = CarouselBaseProps & {
  opts?: unknown;
  plugins?: unknown;
  setApi?: (api: CarouselApi) => void;
};

export const Carousel = React.forwardRef<View, CarouselProps>(
  ({ children, className, opts, orientation = 'horizontal', setApi, plugins, ...props }, ref) => {
    const scrollRef = React.useRef<ScrollView>(null) as React.RefObject<ScrollView>;
    const [canScrollNext, setCanScrollNext] = React.useState(true);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [itemWidth, setItemWidth] = React.useState(Dimensions.get('window').width);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const scrollNext = React.useCallback(() => {
      scrollRef.current?.scrollTo({ x: (currentIndex + 1) * itemWidth, animated: true });
    }, [currentIndex, itemWidth]);

    const scrollPrev = React.useCallback(() => {
      scrollRef.current?.scrollTo({ x: Math.max(0, currentIndex - 1) * itemWidth, animated: true });
    }, [currentIndex, itemWidth]);

    // Very basic API shim
    React.useEffect(() => {
      if (setApi) {
        setApi({
          scrollNext,
          scrollPrev,
          canScrollNext: () => canScrollNext,
          canScrollPrev: () => canScrollPrev,
          on: () => {},
          off: () => {},
        } as unknown as CarouselApi);
      }
    }, [setApi, scrollNext, scrollPrev, canScrollNext, canScrollPrev]);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const contentWidth = event.nativeEvent.contentSize.width;
      const layoutWidth = event.nativeEvent.layoutMeasurement.width;

      const newIndex = Math.round(offsetX / itemWidth);
      setCurrentIndex(newIndex);
      setCanScrollPrev(offsetX > 0);
      setCanScrollNext(offsetX + layoutWidth < contentWidth);
    };

    return (
      <CarouselContext.Provider
        value={{
          orientation,
          scrollRef,
          scrollNext,
          scrollPrev,
          canScrollNext,
          canScrollPrev,
          itemWidth,
          setItemWidth,
        }}
      >
        <View ref={ref} className={cn('relative', className)} {...props}>
          {children}
        </View>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = 'Carousel';

export const CarouselContent = React.forwardRef<ScrollView, CarouselContentBaseProps>(
  ({ children, className, ...props }, ref) => {
    const { scrollRef, orientation } = useCarousel();

    return (
      <View className="overflow-hidden">
        <ScrollView
          ref={scrollRef}
          horizontal={orientation === 'horizontal'}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          snapToInterval={orientation === 'horizontal' ? Dimensions.get('window').width : undefined}
          decelerationRate="fast"
          className={cn('flex', orientation === 'horizontal' ? 'flex-row' : 'flex-col', className)}
          {...props}
        >
          {children}
        </ScrollView>
      </View>
    );
  },
);
CarouselContent.displayName = 'CarouselContent';

export const CarouselItem = React.forwardRef<View, CarouselItemBaseProps>(({ children, className, ...props }, ref) => {
  const { orientation, setItemWidth } = useCarousel();

  const handleLayout = (e: LayoutChangeEvent) => {
    if (orientation === 'horizontal') {
      setItemWidth(e.nativeEvent.layout.width);
    }
  };

  return (
    <View ref={ref} onLayout={handleLayout} className={cn('min-w-0 shrink-0 grow-0 basis-full', className)} {...props}>
      {children}
    </View>
  );
});
CarouselItem.displayName = 'CarouselItem';

export const CarouselPrevious = React.forwardRef<React.ElementRef<typeof Button>, CarouselPreviousBaseProps>(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant as React.ComponentProps<typeof Button>['variant']}
        size={size as React.ComponentProps<typeof Button>['size']}
        className={cn(
          'absolute h-8 w-8 rounded-full',
          orientation === 'horizontal'
            ? 'top-1/2 -left-12 -translate-y-1/2'
            : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
          className,
        )}
        disabled={!canScrollPrev}
        onPress={scrollPrev}
        {...props}
      >
        <ArrowLeft className="text-foreground h-4 w-4" size={16} />
      </Button>
    );
  },
);
CarouselPrevious.displayName = 'CarouselPrevious';

export const CarouselNext = React.forwardRef<React.ElementRef<typeof Button>, CarouselNextBaseProps>(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant as React.ComponentProps<typeof Button>['variant']}
        size={size as React.ComponentProps<typeof Button>['size']}
        className={cn(
          'absolute h-8 w-8 rounded-full',
          orientation === 'horizontal'
            ? 'top-1/2 -right-12 -translate-y-1/2'
            : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
          className,
        )}
        disabled={!canScrollNext}
        onPress={scrollNext}
        {...props}
      >
        <ArrowRight className="text-foreground h-4 w-4" size={16} />
      </Button>
    );
  },
);
CarouselNext.displayName = 'CarouselNext';
