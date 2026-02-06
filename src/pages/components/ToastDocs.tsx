import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ToastDocs() {
  const { toast } = useToast();

  return (
    <ComponentSection title="Toast" description="A succinct message that is displayed temporarily.">
      <ComponentShowcase
        title="Default"
        description="A basic toast notification."
        code={`const { toast } = useToast();

<Button onClick={() => toast({ description: "Your message has been sent." })}>
  Show Toast
</Button>`}
      >
        <Button
          onClick={() =>
            toast({
              description: 'Your message has been sent.',
            })
          }
        >
          Show Toast
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Title"
        description="A toast with a title and description."
        code={`<Button onClick={() => toast({
  title: "Scheduled: Catch up",
  description: "Friday, February 10, 2023 at 5:57 PM",
})}>
  With Title
</Button>`}
      >
        <Button
          onClick={() =>
            toast({
              title: 'Scheduled: Catch up',
              description: 'Friday, February 10, 2023 at 5:57 PM',
            })
          }
        >
          With Title
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Action"
        description="A toast with an action button."
        code={`<Button onClick={() => toast({
  title: "Uh oh! Something went wrong.",
  description: "There was a problem with your request.",
  action: <ToastAction altText="Try again">Try again</ToastAction>,
})}>
  With Action
</Button>`}
      >
        <Button
          variant="outline"
          onClick={() =>
            toast({
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
            })
          }
        >
          With Action
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="Destructive"
        description="A destructive toast for error messages."
        code={`<Button variant="destructive" onClick={() => toast({
  variant: "destructive",
  title: "Error",
  description: "Something went wrong.",
})}>
  Destructive
</Button>`}
      >
        <Button
          variant="destructive"
          onClick={() =>
            toast({
              variant: 'destructive',
              title: 'Error',
              description: 'Something went wrong.',
            })
          }
        >
          Destructive
        </Button>
      </ComponentShowcase>
    </ComponentSection>
  );
}
