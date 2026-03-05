'use client';

import { Coffee, ExternalLink } from 'lucide-react-native';
import * as React from 'react';
import { Linking, View } from 'react-native';

import { Button } from './button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';
import { cn } from './lib/utils';
import { Text } from './text';

const normalizeBaseUrl = (url: string) => {
  const trimmed = url.trim();
  return trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed;
};

const sanitizeCreator = (creatorId: string) => creatorId.trim().replace(/^@+/, '');

const buildPageUrl = (supportUrl: string, creatorId: string) => {
  const base = normalizeBaseUrl(supportUrl);
  const creator = encodeURIComponent(sanitizeCreator(creatorId));
  return `${base}/${creator}`;
};

export interface SupportFabProps extends Omit<React.ComponentPropsWithoutRef<typeof Button>, 'onPress'> {
  supportUrl?: string;
  creatorId: string;
  title?: string;
  description?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  positionClassName?: string;
  buttonClassName?: string;
  panelClassName?: string;
}

export function SupportFab({
  supportUrl = 'https://www.buymeacoffee.com',
  creatorId,
  title = 'Buy me a coffee',
  description = 'Support the project directly from this panel.',
  open,
  defaultOpen = false,
  onOpenChange,
  positionClassName,
  buttonClassName,
  panelClassName,
  className,
  ...buttonProps
}: SupportFabProps) {
  const isControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isOpen = isControlled ? open : internalOpen;

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const pageUrl = React.useMemo(() => buildPageUrl(supportUrl, creatorId), [creatorId, supportUrl]);

  const handleExternalLink = React.useCallback(async () => {
    try {
      await Linking.openURL(pageUrl);
    } catch (error) {
      console.warn('Failed to open external link:', error);
    }
  }, [pageUrl]);

  const trigger = (
    <View
      style={{
        position: 'absolute',
        bottom: 24,
        right: 24,
        zIndex: 50,
      }}
      className={positionClassName}
    >
      <Button
        variant="outline"
        size="icon"
        className={cn(
          'h-14 w-14 rounded-full border border-black/15 bg-[#ffdd00] shadow-lg',
          buttonClassName,
          className,
        )}
        onPress={() => setOpen(true)}
        aria-label="Support this project"
        {...buttonProps}
      >
        <Coffee size={24} className="text-black" />
      </Button>
    </View>
  );

  return (
    <>
      {trigger}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className={cn('max-w-sm', panelClassName)}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          <View className="flex flex-col gap-4">
            <View className="overflow-hidden rounded-md border">
              <View className="bg-muted flex h-48 items-center justify-center">
                <Text className="text-muted-foreground text-center text-sm">
                  Embedded support form would appear here on web.{'\n'}
                  On mobile, this opens the external support page.
                </Text>
              </View>
            </View>

            <View className="text-muted-foreground flex items-center justify-between gap-2 text-xs">
              <Text className="text-muted-foreground flex-1 text-xs">
                If the embedded checkout is unavailable, open the support page directly.
              </Text>
              <Button
                variant="outline"
                size="sm"
                onPress={handleExternalLink}
                className="flex flex-row items-center gap-1"
              >
                <Text className="text-xs">Open Buy Me a Coffee</Text>
                <ExternalLink size={12} className="text-muted-foreground" />
              </Button>
            </View>
          </View>
        </DialogContent>
      </Dialog>
    </>
  );
}

export { buildPageUrl };
