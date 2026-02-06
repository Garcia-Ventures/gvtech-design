import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { CodeBlock } from './CodeBlock';

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentShowcase({ title, description, code, children, className }: ComponentShowcaseProps) {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="preview" className="w-full">
          <div className="border-b px-6">
            <TabsList className="h-10 bg-transparent p-0">
              <TabsTrigger
                value="preview"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Code
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview" className="p-6 mt-0">
            <div className="flex flex-wrap gap-4 items-center">{children}</div>
          </TabsContent>
          <TabsContent value="code" className="mt-0">
            <CodeBlock code={code} className="rounded-none border-0" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

interface ComponentSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ComponentSection({ title, description, children }: ComponentSectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-lg text-muted-foreground">{description}</p>}
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
