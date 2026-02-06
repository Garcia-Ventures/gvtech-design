import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
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
    </ComponentSection>
  );
}
