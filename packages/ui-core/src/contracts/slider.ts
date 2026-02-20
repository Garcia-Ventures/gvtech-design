export interface SliderBaseProps {
  className?: string;
  name?: string;
  defaultValue?: number[];
  value?: number[];
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  minStepsBetweenThumbs?: number;
  dir?: 'ltr' | 'rtl';
  inverted?: boolean;
  disabled?: boolean;
}
