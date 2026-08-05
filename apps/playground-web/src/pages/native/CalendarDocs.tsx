import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function CalendarDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A native date picker utilizing the official OS picker."
        code={`import { Calendar, Text } from "@gv-tech/design-system";
import * as React from "react";
import { View } from "react-native";

export function CalendarExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <View className="items-center space-y-4">
      <Calendar 
        value={date} 
        onChange={(event, selectedDate) => {
          if (selectedDate) setDate(selectedDate);
        }} 
        className="rounded-xl border border-border"
      />
      <Text className="text-sm text-muted-foreground">
        Selected: {date?.toLocaleDateString()}
      </Text>
    </View>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Native Implementation Notes</h3>
        <p className="text-muted-foreground text-sm">
          The Calendar component for Native is a wrapper around <code>@react-native-community/datetimepicker</code>. To
          provide the best UX and accessibility on mobile, it uses the OS-level date picker rather than a custom-built
          grid. By default, it renders using <code>display="inline"</code> for a calendar-like appearance on iOS.
        </p>

        <h4 className="mt-6 text-lg font-medium">Calendar (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'Date',
              description: 'The currently selected date.',
            },
            {
              name: 'onChange',
              type: '(event: DateTimePickerEvent, date?: Date) => void',
              description: 'Event handler called when a date is selected.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes for the wrapping View.',
            },
            {
              name: 'display',
              type: '"default" | "spinner" | "compact" | "inline"',
              defaultValue: '"inline"',
              description: 'The display style of the picker (platform dependent).',
            },
          ]}
        />
      </div>
    </>
  );
}
