import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { CalendarDays } from 'lucide-react';

export function HoverCardDocs() {
  return (
    <ComponentSection title="Hover Card" description="For sighted users to preview content available behind a link.">
      <ComponentShowcase
        title="Default"
        description="A hover card showing user profile information."
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">Joined December 2021</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">Joined December 2021</span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ComponentShowcase>
    </ComponentSection>
  );
}
