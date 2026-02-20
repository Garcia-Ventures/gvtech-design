import * as React from 'react';

export interface AccordionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AccordionItemBaseProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface AccordionTriggerBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AccordionContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}
