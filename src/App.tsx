import { toast } from 'sonner';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Toaster } from './components/ui/sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

function App() {
  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center gap-8">
      <div className="max-w-4xl w-full flex flex-col gap-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">GV Tech Design System</h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive component library built with shadcn/ui and Tailwind CSS.
          </p>
        </header>

        <Tabs defaultValue="buttons" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="buttons">Buttons & Status</TabsTrigger>
              <TabsTrigger value="inputs">Forms & Inputs</TabsTrigger>
              <TabsTrigger value="containers">Layout & Cards</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="buttons" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>All the standard shadcn button styles ready to use.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Status indicators for your application.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inputs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Input Components</CardTitle>
                <CardDescription>Common form elements for data entry.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <Button onClick={() => toast.success('Email submitted!')}>Submit Test</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="containers" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card One</CardTitle>
                  <CardDescription>Short description goes here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Main content for card one.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Two</CardTitle>
                  <CardDescription>Another short description.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Main content for card two.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-12 text-center text-sm text-muted-foreground border-t pt-8">
          Built by Antigravity for Garcia Ventures
        </footer>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
