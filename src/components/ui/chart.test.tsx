import { render, screen } from '@testing-library/react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { describe, expect, it, vi } from 'vitest';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './chart';

// Mock Recharts ResponsiveContainer to avoid ResizeObserver issues and render children immediately
vi.mock('recharts', async (importOriginal) => {
  const original = await importOriginal();
  return {
    ...original,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div style={{ width: 500, height: 300 }}>{children}</div>
    ),
  };
});

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

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
];

describe('Chart', () => {
  it('renders correctly', () => {
    render(
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData} width={500} height={300}>
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
      </ChartContainer>,
    );

    // Recharts renders SVGs. We can check if the container renders.
    // The accessibilityLayer prop on BarChart adds role="application" or similar?
    // Let's check for the chart container.
    // The ChartContainer adds data-chart attribute.
    // But we can check for text.
    expect(screen.getByText('Jan')).toBeInTheDocument();
    expect(screen.getByText('Feb')).toBeInTheDocument();
  });
});
