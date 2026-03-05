'use client';

import { Coffee, ExternalLink } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from './drawer';
import { cn } from './lib/utils';

const MOBILE_QUERY = '(max-width: 767px)';

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

const buildEmbedUrl = (supportUrl: string, creatorId: string) => {
  const base = normalizeBaseUrl(supportUrl);
  const creator = encodeURIComponent(sanitizeCreator(creatorId));
  return `${base}/widget/page/${creator}`;
};

const useIsMobile = () => {
  const getInitial = () => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false;
    }
    return window.matchMedia(MOBILE_QUERY).matches;
  };

  const [isMobile, setIsMobile] = React.useState(getInitial);

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', onChange);

    return () => {
      mediaQuery.removeEventListener('change', onChange);
    };
  }, []);

  return isMobile;
};

export interface SupportFabProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  supportUrl?: string;
  creatorId: string;
  title?: string;
  description?: string;
  iframeTitle?: string;
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
  iframeTitle = 'Buy Me a Coffee support form',
  open,
  defaultOpen = false,
  onOpenChange,
  positionClassName,
  buttonClassName,
  panelClassName,
  className,
  type,
  onClick,
  ...buttonProps
}: SupportFabProps) {
  const isMobile = useIsMobile();
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
  const embedUrl = React.useMemo(() => buildEmbedUrl(supportUrl, creatorId), [creatorId, supportUrl]);

  const panelBody = (
    <div className="flex max-h-[75vh] flex-col gap-3">
      <div className="overflow-hidden rounded-md border">
        <iframe
          title={iframeTitle}
          src={embedUrl}
          className="h-[560px] w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="text-muted-foreground flex items-center justify-between gap-2 text-xs">
        <span>If the embedded checkout is unavailable, open the support page directly.</span>
        <a
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground inline-flex items-center gap-1 font-medium underline underline-offset-2"
        >
          Open Buy Me a Coffee
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );

  const trigger = (
    <div className={cn('fixed right-6 bottom-6 z-50', positionClassName)}>
      <Button
        aria-label="Support this project"
        type={type ?? 'button'}
        className={cn(
          'inline-flex h-14 w-14 rounded-full border border-black/15 bg-[#ffdd00] text-black shadow-[0_16px_36px_-18px_rgba(0,0,0,0.8)] transition hover:-translate-y-0.5 hover:scale-105 hover:bg-[#ffe347] focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-0 active:scale-95',
          buttonClassName,
          className,
        )}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            setOpen(true);
          }
        }}
        {...buttonProps}
      >
        <Coffee className="h-6 w-6" />
        <span className="sr-only">Support this project</span>
      </Button>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {trigger}
        <Drawer open={isOpen} onOpenChange={setOpen}>
          <DrawerContent className={cn('mx-auto w-full max-w-xl', panelClassName)}>
            <DrawerHeader>
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerDescription>{description}</DrawerDescription>
            </DrawerHeader>
            <div className="px-4 pb-4">{panelBody}</div>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <>
      {trigger}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className={cn('max-w-xl p-5', panelClassName)}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {panelBody}
        </DialogContent>
      </Dialog>
    </>
  );
}
