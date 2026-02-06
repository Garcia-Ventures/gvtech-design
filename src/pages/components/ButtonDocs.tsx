import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { ChevronRight, Loader2, Mail } from 'lucide-react';

export function ButtonDocs() {
  return (
    <ComponentSection title="Button" description="Displays a button or a component that looks like a button.">
      <ComponentShowcase
        title="Variants"
        description="The button comes in 6 different variants."
        code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
      >
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="Sizes"
        description="Buttons come in default, small, large, and icon sizes."
        code={`<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><ChevronRight className="h-4 w-4" /></Button>`}
      >
        <Button size="default">Default</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Icon"
        description="You can add icons to buttons for additional context."
        code={`<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</Button>`}
      >
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="Loading State"
        description="Use the disabled attribute with a spinner for loading states."
        code={`<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
      >
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </ComponentShowcase>

      <ComponentShowcase
        title="Disabled"
        description="Buttons can be disabled to prevent interaction."
        code={`<Button disabled>Disabled</Button>`}
      >
        <Button disabled>Disabled</Button>
      </ComponentShowcase>
    </ComponentSection>
  );
}
