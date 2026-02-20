import * as React from 'react';

export interface AvatarBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AvatarImageBaseProps {
  className?: string;
  src?: string;
  alt?: string;
}

export interface AvatarFallbackBaseProps {
  className?: string;
  children?: React.ReactNode;
}
