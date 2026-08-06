---
name: use-ui-web
description: Component usage patterns and best practices for @gv-tech/ui-web in Web applications.
---

# Web Component Skill (@gv-tech/ui-web)

Use this skill when implementing or using `@gv-tech/ui-web` components in web applications.

## Component Principles

1. **Imports**: Import components directly from `@gv-tech/ui-web`.
2. **Contracts**: Component props follow base contracts exported from `@gv-tech/ui-core`.
3. **Class Names**: Override or extend component styles using `className`. All components merge class names via `cn()`.
4. **Theme Tokens**: Use semantic theme classes (`bg-background`, `text-foreground`, `bg-card`, `text-card-foreground`, `bg-primary`, `border-border`, `bg-muted`).

## Usage Example

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@gv-tech/ui-web';

export function UserCard() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Account Overview</CardTitle>
        <CardDescription>Manage your profile and settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">Your account is active. Explore design system components.</p>
        <Button variant="default">View Profile</Button>
      </CardContent>
    </Card>
  );
}
```
