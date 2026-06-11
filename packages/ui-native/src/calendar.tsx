import type { CalendarBaseProps } from '@gv-tech/ui-core';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as React from 'react';
import { View } from 'react-native';
import { cn } from './lib/utils';

export type CalendarProps = Omit<
  React.ComponentProps<typeof DateTimePicker>,
  'value' | 'className' | 'display' | 'minuteInterval'
> &
  CalendarBaseProps & {
    value?: Date;
    onChange?: (event: unknown, date?: Date) => void;
  };

export const Calendar = React.forwardRef<View, CalendarProps>(
  ({ className, value, onChange, showOutsideDays, ...props }, ref) => {
    // If no value is provided, default to current date so the picker doesn't crash
    const [date, setDate] = React.useState<Date>(value || new Date());

    // Sync internal state if external value changes
    React.useEffect(() => {
      if (value) {
        setDate(value);
      }
    }, [value]);

    const handleValueChange = (event: unknown, selectedDate: Date) => {
      setDate(selectedDate);
      if (onChange) {
        onChange(event, selectedDate);
      }
    };

    const handleDismiss = () => {
      if (onChange) {
        onChange({ type: 'dismissed' }, date);
      }
    };

    return (
      <View ref={ref} className={cn('bg-background overflow-hidden rounded-md', className)}>
        <DateTimePicker
          value={date}
          mode="date"
          display="inline"
          onValueChange={handleValueChange}
          onDismiss={handleDismiss}
          {...props}
        />
      </View>
    );
  },
);

Calendar.displayName = 'Calendar';
