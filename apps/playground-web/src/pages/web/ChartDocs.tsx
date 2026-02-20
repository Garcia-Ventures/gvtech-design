import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@gv-tech/ui-web';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
};

export function ChartDocs() {
  return (
    <>
      <ComponentShowcase
        title="Bar Chart"
        description="A simple bar chart."
        code={`<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>`}
      >
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Chart component is a wrapper around{' '}
          <a href="https://recharts.org/" className="underline" target="_blank" rel="noreferrer">
            Recharts
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">ChartContainer</h4>
        <PropsTable
          props={[
            {
              name: 'config',
              type: 'ChartConfig',
              required: true,
              description: 'The configuration for the chart themes and labels.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional class names to apply.',
            },
            {
              name: 'children',
              type: 'ReactNode',
              description: 'The Recharts component to render.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">ChartTooltip</h4>
        <PropsTable
          props={[
            {
              name: 'content',
              type: 'ReactNode',
              description: 'The content to render in the tooltip.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">ChartTooltipContent</h4>
        <PropsTable
          props={[
            {
              name: 'hideLabel',
              type: 'boolean',
              description: 'Whether to hide the label in the tooltip.',
            },
            {
              name: 'hideIndicator',
              type: 'boolean',
              description: 'Whether to hide the indicator in the tooltip.',
            },
            {
              name: 'indicator',
              type: '"line" | "dot" | "dashed"',
              defaultValue: '"dot"',
              description: 'The style of the indicator.',
            },
            {
              name: 'nameKey',
              type: 'string',
              description: 'The key to use for the name in the tooltip.',
            },
            {
              name: 'labelKey',
              type: 'string',
              description: 'The key to use for the label in the tooltip.',
            },
          ]}
        />
      </div>
    </>
  );
}
