import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AvatarDocs() {
  return (
    <ComponentSection title="Avatar" description="An image element with a fallback for representing the user.">
      <ComponentShowcase
        title="Default"
        description="An avatar with an image."
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ComponentShowcase>

      <ComponentShowcase
        title="Fallback"
        description="When no image is available, the fallback is displayed."
        code={`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
      >
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </ComponentShowcase>
    </ComponentSection>
  );
}
