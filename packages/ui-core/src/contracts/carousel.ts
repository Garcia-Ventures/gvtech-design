import * as React from 'react';

export interface CarouselBaseProps {
  className?: string;
  children?: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

export interface CarouselContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CarouselItemBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CarouselPreviousBaseProps {
  className?: string;
  variant?: string;
  size?: string;
}

export interface CarouselNextBaseProps {
  className?: string;
  variant?: string;
  size?: string;
}
