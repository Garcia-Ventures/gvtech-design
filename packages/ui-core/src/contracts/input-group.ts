import * as React from 'react';

export interface InputGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type InputGroupAddonAlign = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';

export interface InputGroupAddonBaseProps {
  className?: string;
  align?: InputGroupAddonAlign | null;
  children?: React.ReactNode;
}

export type InputGroupButtonSize = 'xs' | 'sm' | 'icon-xs' | 'icon-sm';

export interface InputGroupButtonBaseProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: string | null;
  size?: InputGroupButtonSize | null;
  children?: React.ReactNode;
}

export interface InputGroupTextBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface InputGroupInputBaseProps {
  className?: string;
}

export interface InputGroupTextareaBaseProps {
  className?: string;
}
