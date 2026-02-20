import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  cn,
} from '@gv-tech/ui-web';
import { Info } from 'lucide-react';
import * as React from 'react';
import { CodeBlock } from './CodeBlock';
import { PlatformContext } from './CombinedDocsLayout';

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  code: string;
  children?: React.ReactNode;
  className?: string;
}

export function ComponentShowcase({ title, description, code, children, className }: ComponentShowcaseProps) {
  const platform = React.useContext(PlatformContext);
  const isNative = platform === 'native';

  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue={isNative && !children ? 'code' : 'preview'} className="w-full">
          <div className="border-b px-4 md:px-6">
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
          <TabsContent value="preview" className="p-4 md:p-6 mt-0">
            {isNative && !children ? (
              <Alert variant="info" className="bg-muted/50 border-none shadow-none">
                <Info className="h-4 w-4" />
                <AlertTitle>Native Preview Unavailable</AlertTitle>
                <AlertDescription>
                  This is a React Native component. Interactive previews are currently only available for web
                  components. Please switch to the <strong>Code</strong> tab to see the implementation.
                </AlertDescription>
              </Alert>
            ) : (
              <div className="flex flex-wrap gap-4 items-center overflow-x-auto">{children}</div>
            )}
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
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-base md:text-lg text-muted-foreground">{description}</p>}
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
