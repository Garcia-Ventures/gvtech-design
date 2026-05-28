import type {
  CarouselBaseProps,
  CarouselContentBaseProps,
  CarouselItemBaseProps,
  CarouselNextBaseProps,
  CarouselPreviousBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const Carousel: React.FC<CarouselBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const CarouselContent: React.FC<CarouselContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const CarouselItem: React.FC<CarouselItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const CarouselPrevious: React.FC<CarouselPreviousBaseProps> = ({ className }) => {
  return <View className={className} />;
};

export const CarouselNext: React.FC<CarouselNextBaseProps> = ({ className }) => {
  return <View className={className} />;
};
