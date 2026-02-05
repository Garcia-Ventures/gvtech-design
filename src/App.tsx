import { Button } from './components/ui/button';

function App() {
  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold text-foreground">Design System Playground</h1>

      <div className="flex gap-4 border p-6 rounded-lg bg-card">
        <Button onClick={() => console.log('Default clicked')}>Default</Button>
        <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
          Secondary
        </Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <p className="text-muted-foreground">Use this space to test components in isolation.</p>
    </div>
  );
}

export default App;
