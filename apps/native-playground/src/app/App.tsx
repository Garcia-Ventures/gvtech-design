import '../global.css';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Textarea,
  ThemeProvider,
  ThemeToggle,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@gv-tech/ui-native';
import { Bell, Bold, Italic, Underline } from 'lucide-react-native';
import * as React from 'react';
import { Alert as RNAlert, ScrollView, View } from 'react-native';

// ─── Section Header ──────────────────────────────────────────────────────────
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View className="mb-4">
      <Text variant="h2" className="font-bold text-foreground">
        {title}
      </Text>
      {subtitle && (
        <Text variant="caption" className="text-muted-foreground mt-1">
          {subtitle}
        </Text>
      )}
      <Separator className="mt-3" />
    </View>
  );
}

// ─── Forms Screen ─────────────────────────────────────────────────────────────
function FormsScreen() {
  const [name, setName] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [switchOn, setSwitchOn] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('option-one');
  const [selectValue, setSelectValue] = React.useState('');
  const [toggleActive, setToggleActive] = React.useState(false);
  const [toggleGroup, setToggleGroup] = React.useState<string[]>([]);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <SectionHeader title="Forms" subtitle="Input, Checkbox, Switch, RadioGroup, Select, Textarea, Toggle" />

      {/* Input */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Input</CardTitle>
          <CardDescription>Text input with label</CardDescription>
        </CardHeader>
        <CardContent className="gap-3">
          <View className="gap-2">
            <Label nativeID="name-input">Full Name</Label>
            <Input placeholder="Enter your name" value={name} onChangeText={setName} aria-labelledby="name-input" />
          </View>
          {name.length > 0 && (
            <Text variant="caption" className="text-muted-foreground">
              Hello, {name}!
            </Text>
          )}
        </CardContent>
      </Card>

      {/* Textarea */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Textarea</CardTitle>
          <CardDescription>Multi-line text input</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Tell us about yourself..."
            value={bio}
            onChangeText={setBio}
            numberOfLines={4}
            className="min-h-[100px]"
          />
          <Text variant="caption" className="text-muted-foreground mt-2">
            {bio.length} characters
          </Text>
        </CardContent>
      </Card>

      {/* Checkbox & Switch */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Checkbox & Switch</CardTitle>
        </CardHeader>
        <CardContent className="gap-4">
          <View className="flex-row items-center gap-3">
            <Checkbox checked={checked} onCheckedChange={setChecked} id="terms" />
            <Label onPress={() => setChecked(!checked)}>Accept terms and conditions</Label>
          </View>
          <View className="flex-row items-center justify-between">
            <Label>Email notifications</Label>
            <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
          </View>
        </CardContent>
      </Card>

      {/* RadioGroup */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Radio Group</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={radioValue} onValueChange={setRadioValue} className="gap-3">
            {[
              { value: 'option-one', label: 'Option One' },
              { value: 'option-two', label: 'Option Two' },
              { value: 'option-three', label: 'Option Three' },
            ].map((opt) => (
              <View key={opt.value} className="flex-row items-center gap-3">
                <RadioGroupItem value={opt.value} id={opt.value} />
                <Label onPress={() => setRadioValue(opt.value)}>{opt.label}</Label>
              </View>
            ))}
          </RadioGroup>
          <Text variant="caption" className="text-muted-foreground mt-3">
            Selected: {radioValue}
          </Text>
        </CardContent>
      </Card>

      {/* Select */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Select</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={selectValue ? { value: selectValue, label: selectValue } : undefined}
            onValueChange={(opt) => setSelectValue(opt?.value ?? '')}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose a framework…" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react-native" label="React Native" />
              <SelectItem value="expo" label="Expo" />
              <SelectItem value="flutter" label="Flutter" />
              <SelectItem value="swiftui" label="SwiftUI" />
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Toggle */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Toggle & Toggle Group</CardTitle>
        </CardHeader>
        <CardContent className="gap-4">
          <View className="flex-row items-center gap-3">
            <Toggle pressed={toggleActive} onPressedChange={setToggleActive}>
              <Bell size={16} className="text-foreground" />
            </Toggle>
            <Text variant="body" className="text-muted-foreground">
              {toggleActive ? 'Notifications on' : 'Notifications off'}
            </Text>
          </View>
          <View>
            <Text variant="caption" className="text-muted-foreground mb-2">
              Text formatting
            </Text>
            <ToggleGroup
              type="multiple"
              value={toggleGroup}
              onValueChange={setToggleGroup}
              className="justify-start gap-1"
            >
              <ToggleGroupItem value="bold">
                <Bold size={16} className="text-foreground" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic">
                <Italic size={16} className="text-foreground" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline">
                <Underline size={16} className="text-foreground" />
              </ToggleGroupItem>
            </ToggleGroup>
          </View>
        </CardContent>
      </Card>

      {/* Button variants */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Button</CardTitle>
          <CardDescription>All variants and sizes</CardDescription>
        </CardHeader>
        <CardContent className="gap-3">
          <View className="flex-row flex-wrap gap-2">
            {(['default', 'secondary', 'destructive', 'outline', 'ghost'] as const).map((variant) => (
              <Button key={variant} variant={variant} onPress={() => RNAlert.alert('Button', `Pressed: ${variant}`)}>
                <Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
              </Button>
            ))}
          </View>
          <View className="flex-row gap-2">
            <Button size="sm" className="flex-1">
              <Text>Small</Text>
            </Button>
            <Button size="default" className="flex-1">
              <Text>Default</Text>
            </Button>
            <Button size="lg" className="flex-1">
              <Text>Large</Text>
            </Button>
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
}

// ─── Display Screen ────────────────────────────────────────────────────────────
function DisplayScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <SectionHeader title="Data Display" subtitle="Text, Badge, Avatar, Card, Accordion, Table, Skeleton" />

      {/* Typography */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent className="gap-2">
          {(['h1', 'h2', 'h3', 'h4', 'body', 'caption'] as const).map((variant) => (
            <Text key={variant} variant={variant} className="text-foreground">
              {variant.toUpperCase()} — The quick brown fox
            </Text>
          ))}
        </CardContent>
      </Card>

      {/* Badges */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Badge</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex-row flex-wrap gap-2">
            {(['default', 'secondary', 'destructive', 'outline'] as const).map((variant) => (
              <Badge key={variant} variant={variant}>
                <Text>{variant}</Text>
              </Badge>
            ))}
          </View>
        </CardContent>
      </Card>

      {/* Avatar */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Avatar</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex-row gap-3 items-center">
            <Avatar alt="GV Tech">
              <AvatarImage source={{ uri: 'https://github.com/eng618.png' }} />
              <AvatarFallback>
                <Text>GV</Text>
              </AvatarFallback>
            </Avatar>
            <Avatar alt="Fallback">
              <AvatarImage source={{ uri: 'https://invalid-url-to-show-fallback' }} />
              <AvatarFallback>
                <Text>FB</Text>
              </AvatarFallback>
            </Avatar>
            <View className="gap-1">
              <Text variant="body" className="font-semibold text-foreground">
                Eric Garcia
              </Text>
              <Text variant="caption" className="text-muted-foreground">
                @eng618
              </Text>
            </View>
          </View>
        </CardContent>
      </Card>

      {/* Accordion */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Accordion</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <Text className="text-foreground font-medium">Is it accessible?</Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text className="text-muted-foreground">
                  Yes. It follows the WAI-ARIA design pattern and uses rn-primitives for native accessibility.
                </Text>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <Text className="text-foreground font-medium">Is it animated?</Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text className="text-muted-foreground">
                  Yes. Uses react-native-reanimated for smooth height and chevron animations.
                </Text>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <Text className="text-foreground font-medium">Can I customize it?</Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text className="text-muted-foreground">
                  Absolutely. Use className and NativeWind to apply any styles.
                </Text>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Table</CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-hidden">
          <Table>
            <TableCaption>GV Tech Component Status</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Web</TableHead>
                <TableHead>Native</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'Button', web: '✅', native: '✅' },
                { name: 'Card', web: '✅', native: '✅' },
                { name: 'Input', web: '✅', native: '✅' },
                { name: 'Dialog', web: '✅', native: '✅' },
                { name: 'Carousel', web: '✅', native: '🚫' },
              ].map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Text className="text-foreground">{row.name}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{row.web}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{row.native}</Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Skeleton */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Skeleton</CardTitle>
          <CardDescription>Animated loading placeholders</CardDescription>
        </CardHeader>
        <CardContent className="gap-3">
          <View className="flex-row items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <View className="gap-2 flex-1">
              <Skeleton className="h-4 w-[80%]" />
              <Skeleton className="h-4 w-[60%]" />
            </View>
          </View>
          <Skeleton className="h-24 w-full rounded-lg" />
        </CardContent>
      </Card>

      {/* Tabs */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account">
            <TabsList className="flex-row w-full">
              <TabsTrigger value="account" className="flex-1">
                <Text>Account</Text>
              </TabsTrigger>
              <TabsTrigger value="password" className="flex-1">
                <Text>Password</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-4">
              <Text className="text-muted-foreground">
                Update your account settings here. Changes take effect immediately.
              </Text>
            </TabsContent>
            <TabsContent value="password" className="mt-4">
              <Text className="text-muted-foreground">
                Change your password here. You'll be logged out after saving.
              </Text>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </ScrollView>
  );
}

// ─── Feedback Screen ───────────────────────────────────────────────────────────
function FeedbackScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <SectionHeader title="Feedback" subtitle="Alert, AlertDialog, Dialog, Sheet, Tooltip, Toast, Collapsible" />

      {/* Alert variants */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Alert</CardTitle>
        </CardHeader>
        <CardContent className="gap-3">
          <Alert>
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>This is a default informational alert message.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Destructive Alert</AlertTitle>
            <AlertDescription>Something went wrong. Please try again.</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Your session expires in 5 minutes.</AlertDescription>
          </Alert>
          <Alert variant="info">
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>A new version is available. Update now.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* AlertDialog */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Alert Dialog</CardTitle>
          <CardDescription>A modal that requires a response</CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Text>Delete Account</Text>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove all your data.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  <Text>Cancel</Text>
                </AlertDialogCancel>
                <AlertDialogAction>
                  <Text>Continue</Text>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>

      {/* Dialog */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Dialog</CardTitle>
          <CardDescription>Standard modal dialog</CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Text>Open Dialog</Text>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when done.</DialogDescription>
              </DialogHeader>
              <View className="gap-3 py-2">
                <View className="gap-2">
                  <Label nativeID="dialog-name">Name</Label>
                  <Input placeholder="Your name" aria-labelledby="dialog-name" />
                </View>
              </View>
              <DialogFooter>
                <Button>
                  <Text>Save changes</Text>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* Sheet */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Sheet</CardTitle>
          <CardDescription>Slides in from the side</CardDescription>
        </CardHeader>
        <CardContent className="flex-row gap-2 flex-wrap">
          {(['bottom', 'right', 'left'] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Text className="capitalize">{side}</Text>
                </Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Sheet ({side})</SheetTitle>
                  <SheetDescription>This sheet slides in from the {side}.</SheetDescription>
                </SheetHeader>
                <View className="flex-1 py-4">
                  <Text className="text-muted-foreground">Add your content here.</Text>
                </View>
                <SheetFooter>
                  <Button>
                    <Text>Save</Text>
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </CardContent>
      </Card>

      {/* Tooltip */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Tooltip</CardTitle>
          <CardDescription>Long-press to reveal</CardDescription>
        </CardHeader>
        <CardContent className="flex-row gap-3 flex-wrap">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  <Text>Hover me</Text>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <Text>Long-press on native to see this tooltip</Text>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>

      {/* Collapsible */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Collapsible</CardTitle>
        </CardHeader>
        <CardContent>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full">
                <Text>Toggle content</Text>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <View className="mt-3 gap-2">
                <Text className="text-muted-foreground text-sm">
                  This content is revealed when the collapsible is open. It can contain any child components.
                </Text>
              </View>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </ScrollView>
  );
}

// ─── Layout Screen ─────────────────────────────────────────────────────────────
function LayoutScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <SectionHeader title="Layout & Theme" subtitle="Card, Separator, ThemeToggle" />

      {/* Theme Toggle */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Theme Toggle</CardTitle>
          <CardDescription>Switch between light, dark, and system</CardDescription>
        </CardHeader>
        <CardContent className="flex-row items-center justify-between">
          <Text className="text-foreground">Current theme</Text>
          <ThemeToggle />
        </CardContent>
      </Card>

      {/* Card Variants */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Card</CardTitle>
          <CardDescription>Full card with header, content, and footer</CardDescription>
        </CardHeader>
        <CardContent>
          <Text className="text-muted-foreground text-sm">
            Cards are the primary surface for grouping related content. They support header, content, description, and
            footer sub-components.
          </Text>
        </CardContent>
        <CardFooter className="flex-row gap-3">
          <Button variant="outline" className="flex-1">
            <Text>Cancel</Text>
          </Button>
          <Button className="flex-1">
            <Text>Confirm</Text>
          </Button>
        </CardFooter>
      </Card>

      {/* Separator */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Separator</CardTitle>
        </CardHeader>
        <CardContent className="gap-3">
          <Text className="text-foreground">Above separator</Text>
          <Separator />
          <Text className="text-foreground">Below separator</Text>
          <View className="flex-row items-center gap-3">
            <Text className="text-muted-foreground">Left</Text>
            <Separator orientation="vertical" className="h-4" />
            <Text className="text-muted-foreground">Center</Text>
            <Separator orientation="vertical" className="h-4" />
            <Text className="text-muted-foreground">Right</Text>
          </View>
        </CardContent>
      </Card>

      {/* Component Count */}
      <Card className="mb-4 bg-primary/5">
        <CardContent className="pt-6">
          <View className="items-center gap-3">
            <Text variant="h1" className="text-primary font-bold text-center">
              27+
            </Text>
            <Text variant="body" className="text-center text-foreground font-medium">
              Real Native Components
            </Text>
            <Text variant="caption" className="text-center text-muted-foreground">
              All built with NativeWind + RN Primitives + Reanimated, sharing contracts with the web library.
            </Text>
            <View className="flex-row gap-2 flex-wrap justify-center mt-2">
              {[
                'Button',
                'Card',
                'Input',
                'Checkbox',
                'Switch',
                'RadioGroup',
                'Select',
                'Tabs',
                'Accordion',
                'Alert',
                'Dialog',
                'Sheet',
                'Toast',
                'Tooltip',
                'Badge',
                'Avatar',
                'Skeleton',
                'Table',
                'Text',
                'Textarea',
                'Toggle',
                'ToggleGroup',
                'Separator',
                'Collapsible',
                'Label',
                'AlertDialog',
                'ThemeToggle',
              ].map((name) => (
                <Badge key={name} variant="secondary">
                  <Text className="text-xs">{name}</Text>
                </Badge>
              ))}
            </View>
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export const App = () => {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <View className="flex-1 bg-background">
          {/* Header */}
          <View className="pt-12 pb-3 px-4 border-b border-border bg-background">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <Text variant="h3" className="font-bold text-foreground">
                  GV Native
                </Text>
                <Badge variant="outline">
                  <Text className="text-xs">Alpha</Text>
                </Badge>
              </View>
              <ThemeToggle />
            </View>
            <Text variant="caption" className="text-muted-foreground mt-1">
              Component showcase for @gv-tech/ui-native
            </Text>
          </View>

          {/* Main Tabs */}
          <Tabs defaultValue="forms" className="flex-1">
            <View className="border-b border-border bg-background px-4">
              <TabsList className="flex-row bg-transparent p-0 h-12">
                {(['forms', 'display', 'feedback', 'layout'] as const).map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="flex-1 capitalize rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent"
                  >
                    <Text className="capitalize text-sm">{tab}</Text>
                  </TabsTrigger>
                ))}
              </TabsList>
            </View>

            <TabsContent value="forms" className="flex-1 mt-0">
              <FormsScreen />
            </TabsContent>
            <TabsContent value="display" className="flex-1 mt-0">
              <DisplayScreen />
            </TabsContent>
            <TabsContent value="feedback" className="flex-1 mt-0">
              <FeedbackScreen />
            </TabsContent>
            <TabsContent value="layout" className="flex-1 mt-0">
              <LayoutScreen />
            </TabsContent>
          </Tabs>
        </View>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
