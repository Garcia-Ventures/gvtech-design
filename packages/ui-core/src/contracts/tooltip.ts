import * as React from 'react';

export interface TooltipBaseProps {
  children?: React.ReactNode;
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
}

export interface TooltipContentBaseProps {
  children?: React.ReactNode;
  className?: string;
  sideOffset?: number;
  avoidCollisions?: boolean;
}

export interface TooltipTriggerBaseProps {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export interface TooltipProviderBaseProps {
  children?: React.ReactNode;
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
}
