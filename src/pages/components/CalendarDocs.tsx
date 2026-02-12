import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Calendar } from '@/components/ui/calendar';
import * as React from 'react';

export function CalendarDocs() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <ComponentSection
      title="Calendar"
      description="A date picker component with support for single and range selection."
    >
      <ComponentShowcase
        title="Default"
        description="A basic calendar for date selection."
        code={`const [date, setDate] = React.useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`}
      >
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Calendar component is built on top of{' '}
          <a href="https://react-day-picker.js.org/" className="underline" target="_blank" rel="noreferrer">
            React Day Picker
          </a>
          .
        </p>
        <PropsTable
          props={[
            {
              name: 'mode',
              type: '"single" | "multiple" | "range" | "default"',
              defaultValue: '"default"',
              description: 'The selection mode of the calendar.',
            },
            {
              name: 'selected',
              type: 'Date | Date[] | DateRange | undefined',
              description: 'The selected date(s).',
            },
            {
              name: 'onSelect',
              type: '(date: any) => void',
              description: 'Event handler called when a date is selected.',
            },
            {
              name: 'showOutsideDays',
              type: 'boolean',
              defaultValue: 'true',
              description: 'Whether to show days from the previous and next months.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
