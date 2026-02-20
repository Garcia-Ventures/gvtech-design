import * as React from 'react';

export interface NavigationMenuBaseProps {
  children?: React.ReactNode;
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  dir?: 'ltr' | 'rtl';
  orientation?: 'horizontal' | 'vertical';
  delayDuration?: number;
  skipDelayDuration?: number;
}

export interface NavigationMenuListBaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface NavigationMenuItemBaseProps {
  children?: React.ReactNode;
  className?: string;
  value?: string;
}

export interface NavigationMenuTriggerBaseProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export interface NavigationMenuContentBaseProps {
  children?: React.ReactNode;
  className?: string;
  forceMount?: true;
}

export interface NavigationMenuLinkBaseProps {
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
  onSelect?: (event: Event) => void;
  href?: string;
}

export interface NavigationMenuViewportBaseProps {
  children?: React.ReactNode;
  className?: string;
  forceMount?: true;
}

export interface NavigationMenuIndicatorBaseProps {
  children?: React.ReactNode;
  className?: string;
  forceMount?: true;
}
