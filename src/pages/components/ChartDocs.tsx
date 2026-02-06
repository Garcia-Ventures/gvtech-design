import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export function ChartDocs() {
  return (
    <ComponentSection title="Chart" description="Beautiful charts built using Recharts and styled with CSS variables.">
      <ComponentShowcase
        title="Overview"
        description="Charts are built using Recharts. The chart components use CSS variables for theming."
        code={`// Install recharts
npm install recharts

// Import and use
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 800 },
  { name: "Apr", total: 1600 },
  { name: "May", total: 900 },
  { name: "Jun", total: 1700 },
];

<ResponsiveContainer width="100%" height={350}>
  <BarChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
  </BarChart>
</ResponsiveContainer>`}
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Chart Example</CardTitle>
            <CardDescription>A preview of chart styling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>Charts use CSS variables for consistent theming</span>
              </div>
              <div className="grid grid-cols-6 gap-2 h-32 items-end">
                {[40, 70, 30, 60, 35, 65].map((height, i) => (
                  <div
                    key={i}
                    className="bg-primary rounded-t-sm transition-all hover:bg-primary/80"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-6 gap-2 text-xs text-center text-muted-foreground">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </ComponentShowcase>

      <ComponentShowcase
        title="CSS Variables"
        description="Use CSS variables to theme your charts."
        code={`/* In your CSS */
:root {
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
}

.dark {
  --chart-1: 220 70% 50%;
  --chart-2: 160 60% 45%;
  --chart-3: 30 80% 55%;
  --chart-4: 280 65% 60%;
  --chart-5: 340 75% 55%;
}

/* Use in your chart */
<Bar fill="hsl(var(--chart-1))" />
<Line stroke="hsl(var(--chart-2))" />`}
      >
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[hsl(12,76%,61%)]" />
              <span className="text-sm">--chart-1</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[hsl(173,58%,39%)]" />
              <span className="text-sm">--chart-2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[hsl(197,37%,24%)]" />
              <span className="text-sm">--chart-3</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[hsl(43,74%,66%)]" />
              <span className="text-sm">--chart-4</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[hsl(27,87%,67%)]" />
              <span className="text-sm">--chart-5</span>
            </div>
          </div>
        </div>
      </ComponentShowcase>
    </ComponentSection>
  );
}
