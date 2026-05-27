import type { SliderBaseProps } from '@gv-tech/ui-core';
import * as SliderPrimitive from '@rn-primitives/slider';
import * as React from 'react';
import { cn } from './lib/utils';

export const Slider: React.FC<SliderBaseProps> = ({
  className,
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  ...props
}) => {
  const numericValue = value !== undefined ? value[0] : min;

  return (
    <SliderPrimitive.Root
      value={numericValue}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      className={cn('relative flex w-full touch-none items-center select-none', disabled && 'opacity-50', className)}
      {...props}
    >
      <SliderPrimitive.Track className="bg-secondary relative h-2 w-full grow rounded-full">
        <SliderPrimitive.Range className="bg-primary absolute h-full rounded-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="border-primary bg-background focus-visible:ring-ring block h-5 w-5 rounded-full border-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none" />
    </SliderPrimitive.Root>
  );
};
Slider.displayName = 'Slider';
