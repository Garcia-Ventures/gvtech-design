import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function SonnerDocs() {
  return (
    <ComponentSection title="Sonner" description="An opinionated toast component for React.">
      <ComponentShowcase
        title="Default"
        description="A basic toast notification."
        code={`import { toast } from "sonner";

<Button onClick={() => toast("Event has been created")}>
  Show Toast
</Button>`}
      >
        <Button onClick={() => toast('Event has been created')}>Show Toast</Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="Success"
        description="A success toast."
        code={`<Button onClick={() => toast.success("Successfully saved!")}>
  Success Toast
</Button>`}
      >
        <Button onClick={() => toast.success('Successfully saved!')}>Success Toast</Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="Error"
        description="An error toast."
        code={`<Button variant="destructive" onClick={() => toast.error("Something went wrong")}>
  Error Toast
</Button>`}
      >
        <Button variant="destructive" onClick={() => toast.error('Something went wrong')}>
          Error Toast
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Description"
        description="A toast with a description."
        code={`<Button onClick={() => toast("Event has been created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
})}>
  With Description
</Button>`}
      >
        <Button
          onClick={() =>
            toast('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
            })
          }
        >
          With Description
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Action"
        description="A toast with an action button."
        code={`<Button onClick={() => toast("Event has been created", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})}>
  With Action
</Button>`}
      >
        <Button
          onClick={() =>
            toast('Event has been created', {
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
              },
            })
          }
        >
          With Action
        </Button>
      </ComponentShowcase>
    </ComponentSection>
  );
}
