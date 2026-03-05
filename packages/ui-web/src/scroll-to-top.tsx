'use client';

import { ScrollToTopBaseProps } from '@gv-tech/ui-core';
import { ArrowUp } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';
import { cn } from './lib/utils';

export interface ScrollToTopProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ScrollToTopBaseProps {
  /** Optional custom scroll container; defaults to window when undefined. */
  scrollTarget?: Window | HTMLElement | null;
}

type ScrollTarget = Window | HTMLElement | null;

const isWindowTarget = (target: Exclude<ScrollTarget, null>): target is Window =>
  typeof (target as Window).scrollY === 'number';

const getScrollOffset = (target: Exclude<ScrollTarget, null>) =>
  isWindowTarget(target) ? target.scrollY : target.scrollTop;

export function ScrollToTop({
  threshold = 240,
  exitDuration = 450,
  behavior = 'smooth',
  scrollTarget,
  className,
  label = 'Scroll to top',
  onClick,
  tabIndex,
  type,
  ...props
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isExiting, setIsExiting] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const target = scrollTarget === undefined ? window : scrollTarget;

    if (!target) {
      setIsVisible(false);
      return;
    }

    const updateVisibility = () => {
      const offset = getScrollOffset(target);

      if (isExiting) {
        // Keep the control dismissed during the return-to-top animation,
        // then release once we are back under the visibility threshold.
        if (offset <= threshold) {
          setIsVisible(false);
          setIsExiting(false);
        }
        return;
      }

      setIsVisible(offset > threshold);
    };

    updateVisibility();
    target.addEventListener('scroll', updateVisibility, { passive: true });

    return () => {
      target.removeEventListener('scroll', updateVisibility);
    };
  }, [isExiting, scrollTarget, threshold]);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const state = isExiting ? 'exiting' : isVisible ? 'visible' : 'hidden';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || isExiting) {
      return;
    }

    const target = scrollTarget === undefined ? window : scrollTarget;
    if (!target) {
      return;
    }

    setIsExiting(true);

    const timeout = Math.max(0, exitDuration);
    timeoutRef.current = window.setTimeout(() => {
      target.scrollTo({ top: 0, behavior });

      const offset = getScrollOffset(target);
      setIsVisible(false);

      if (offset <= threshold) {
        setIsExiting(false);
      }
    }, timeout);
  };

  return (
    <Button
      aria-label={label}
      data-state={state}
      type={type ?? 'button'}
      variant="default"
      size="icon"
      tabIndex={state === 'hidden' ? -1 : tabIndex}
      className={cn(
        'group border-primary/40 bg-primary text-primary-foreground focus-visible:ring-ring fixed right-6 bottom-6 z-50 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border shadow-[0_18px_40px_-22px_hsl(var(--primary)/0.9)] transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.45),transparent_55%)] before:opacity-80',
        'hover:-translate-y-1 hover:scale-105 hover:shadow-[0_24px_48px_-24px_hsl(var(--primary)/0.95)] active:translate-y-0 active:scale-95',
        state === 'visible' && 'translate-y-0 scale-100 opacity-100',
        state === 'hidden' &&
          'pointer-events-none translate-y-24 scale-75 opacity-0 blur-[1px] motion-safe:animate-none',
        state === 'exiting' &&
          'pointer-events-none translate-y-28 scale-90 opacity-0 blur-[2px] motion-safe:animate-none',
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="bg-primary-foreground/20 absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:animate-pulse group-hover:opacity-100" />
      <span className="border-primary-foreground/35 absolute inset-0 rounded-full border opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100" />
      <ArrowUp className="relative z-10 h-5 w-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]" />
      <span className="sr-only">{label}</span>
    </Button>
  );
}
