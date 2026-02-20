import * as React from 'react';

export interface CommandBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CommandInputBaseProps {
  className?: string;
  placeholder?: string;
}

export interface CommandListBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CommandEmptyBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CommandGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
  heading?: React.ReactNode;
}

export interface CommandItemBaseProps {
  className?: string;
  children?: React.ReactNode;
  onSelect?: (value: string) => void;
  value?: string;
}

export interface CommandSeparatorBaseProps {
  className?: string;
}

export interface CommandShortcutBaseProps {
  className?: string;
  children?: React.ReactNode;
}
