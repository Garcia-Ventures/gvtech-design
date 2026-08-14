import { useDocMetadata } from '@/hooks/useDocMetadata';
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@gv-tech/ui-web';
import { CheckCircle2, Clock, Search, XCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ComponentStatusItem {
  name: string;
  href: string;
  category: string;
  web: 'implemented' | 'in-progress' | 'planned';
  native: 'implemented' | 'in-progress' | 'planned';
  flutter: 'implemented' | 'in-progress' | 'planned';
}

const componentStatuses: ComponentStatusItem[] = [
  {
    name: 'Button',
    href: 'button',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Card',
    href: 'card',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Badge',
    href: 'badge',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Input',
    href: 'input',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Checkbox',
    href: 'checkbox',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Switch',
    href: 'switch',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Dialog',
    href: 'dialog',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Avatar',
    href: 'avatar',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Accordion',
    href: 'accordion',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Alert',
    href: 'alert',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Alert Dialog',
    href: 'alert-dialog',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Aspect Ratio',
    href: 'aspect-ratio',
    category: 'Layout',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Breadcrumb',
    href: 'breadcrumb',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Calendar',
    href: 'calendar',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Carousel',
    href: 'carousel',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Chart',
    href: 'chart',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Collapsible',
    href: 'collapsible',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Combobox',
    href: 'combobox',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Command',
    href: 'command',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Context Menu',
    href: 'context-menu',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Direction',
    href: 'direction',
    category: 'Layout',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Drawer',
    href: 'drawer',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Dropdown Menu',
    href: 'dropdown-menu',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Empty',
    href: 'empty',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Field',
    href: 'field',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  { name: 'Form', href: 'form', category: 'Forms', web: 'implemented', native: 'implemented', flutter: 'planned' },
  {
    name: 'Hover Card',
    href: 'hover-card',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Input Group',
    href: 'input-group',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Input OTP',
    href: 'input-otp',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  { name: 'Item', href: 'item', category: 'Components', web: 'implemented', native: 'implemented', flutter: 'planned' },
  {
    name: 'Kbd',
    href: 'kbd',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  { name: 'Label', href: 'label', category: 'Forms', web: 'implemented', native: 'implemented', flutter: 'planned' },
  {
    name: 'Menubar',
    href: 'menubar',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Navigation Menu',
    href: 'navigation-menu',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Pagination',
    href: 'pagination',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Popover',
    href: 'popover',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Progress',
    href: 'progress',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Radio Group',
    href: 'radio-group',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Resizable',
    href: 'resizable',
    category: 'Layout',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Scroll Area',
    href: 'scroll-area',
    category: 'Layout',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Scroll To Top',
    href: 'scroll-to-top',
    category: 'Layout',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Select',
    href: 'select',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Separator',
    href: 'separator',
    category: 'Layout',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Sheet',
    href: 'sheet',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Sidebar',
    href: 'sidebar',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Skeleton',
    href: 'skeleton',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Slider',
    href: 'slider',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Sonner',
    href: 'sonner',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Spinner',
    href: 'spinner',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Table',
    href: 'table',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'planned',
  },
  {
    name: 'Tabs',
    href: 'tabs',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Text',
    href: 'text',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Textarea',
    href: 'textarea',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Toast',
    href: 'toast',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Toggle',
    href: 'toggle',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Toggle Group',
    href: 'toggle-group',
    category: 'Forms',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
  {
    name: 'Tooltip',
    href: 'tooltip',
    category: 'Components',
    web: 'implemented',
    native: 'implemented',
    flutter: 'implemented',
  },
];

export function ComponentStatusPage() {
  useDocMetadata({
    title: 'Component Status Matrix',
    description: 'Track component implementation status across Web, React Native, and Flutter.',
  });

  const [query, setQuery] = useState('');

  const filteredComponents = componentStatuses.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()),
  );

  const stats = {
    total: componentStatuses.length,
    webCount: componentStatuses.filter((i) => i.web === 'implemented').length,
    nativeCount: componentStatuses.filter((i) => i.native === 'implemented').length,
    flutterCount: componentStatuses.filter((i) => i.flutter === 'implemented').length,
  };

  const renderStatusBadge = (status: 'implemented' | 'in-progress' | 'planned') => {
    switch (status) {
      case 'implemented':
        return (
          <Badge
            variant="outline"
            className="gap-1 border-emerald-500/30 bg-emerald-500/10 font-medium text-emerald-600 dark:text-emerald-400"
          >
            <CheckCircle2 className="h-3 w-3" /> Ready
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge
            variant="outline"
            className="gap-1 border-amber-500/30 bg-amber-500/10 font-medium text-amber-600 dark:text-amber-400"
          >
            <Clock className="h-3 w-3" /> In Progress
          </Badge>
        );
      case 'planned':
        return (
          <Badge
            variant="outline"
            className="border-muted-foreground/30 bg-muted/40 text-muted-foreground gap-1 font-medium"
          >
            <XCircle className="h-3 w-3" /> Planned
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Component Status Matrix</h1>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">
          Live implementation progress across Web (`ui-web`), Mobile (`ui-native`), and Flutter (`ui-flutter`).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="bg-muted/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              🌐 Web (Radix / Tailwind 4)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">{stats.webCount}</span>
              <span className="text-muted-foreground text-xs">/ {stats.total} Components</span>
            </div>
            <p className="text-muted-foreground mt-1 text-xs">100% Production Ready</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              📱 Mobile (React Native / NativeWind)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">{stats.nativeCount}</span>
              <span className="text-muted-foreground text-xs">/ {stats.total} Components</span>
            </div>
            <p className="text-muted-foreground mt-1 text-xs">100% Production Ready</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              💙 Flutter (`packages/ui-flutter`)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-blue-500">{stats.flutterCount}</span>
              <span className="text-muted-foreground text-xs">/ {stats.total} Components</span>
            </div>
            <p className="text-muted-foreground mt-1 text-xs">Foundation + Core Active</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Search components or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="text-muted-foreground text-xs">
          Showing {filteredComponents.length} of {componentStatuses.length} components
        </div>
      </div>

      <Card className="overflow-hidden border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40">
              <TableHead className="w-[200px] font-semibold">Component</TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="font-semibold">🌐 Web</TableHead>
              <TableHead className="font-semibold">📱 React Native</TableHead>
              <TableHead className="font-semibold">💙 Flutter</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredComponents.map((item) => (
              <TableRow key={item.name} className="hover:bg-muted/30">
                <TableCell className="font-medium">
                  <Link to={`/docs/${item.href}`} className="hover:text-primary hover:underline">
                    {item.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <span className="text-muted-foreground bg-muted rounded px-2 py-0.5 text-xs">{item.category}</span>
                </TableCell>
                <TableCell>{renderStatusBadge(item.web)}</TableCell>
                <TableCell>{renderStatusBadge(item.native)}</TableCell>
                <TableCell>{renderStatusBadge(item.flutter)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
