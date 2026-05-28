import type {
  BreadcrumbBaseProps,
  BreadcrumbEllipsisBaseProps,
  BreadcrumbItemBaseProps,
  BreadcrumbLinkBaseProps,
  BreadcrumbListBaseProps,
  BreadcrumbPageBaseProps,
  BreadcrumbSeparatorBaseProps,
} from '@gv-tech/ui-core';
import { Slot } from '@rn-primitives/slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react-native';
import * as React from 'react';
import { Pressable, View } from 'react-native';
import { wrapTextChildren } from './lib/render-native';
import { cn } from './lib/utils';
import { Text } from './text';

export const Breadcrumb = React.forwardRef<View, BreadcrumbBaseProps & { separator?: React.ReactNode }>(
  ({ className, children, ...props }, ref) => {
    return (
      <View ref={ref} aria-label="breadcrumb" className={cn('flex flex-row', className)} {...props}>
        {children}
      </View>
    );
  },
);
Breadcrumb.displayName = 'Breadcrumb';

export const BreadcrumbList = React.forwardRef<View, BreadcrumbListBaseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(
          'text-muted-foreground flex flex-row flex-wrap items-center gap-1.5 break-words sm:gap-2.5',
          className,
        )}
        {...props}
      >
        {children}
      </View>
    );
  },
);
BreadcrumbList.displayName = 'BreadcrumbList';

export const BreadcrumbItem = React.forwardRef<View, BreadcrumbItemBaseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <View ref={ref} className={cn('flex flex-row items-center gap-1.5', className)} {...props}>
        {children}
      </View>
    );
  },
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

export type BreadcrumbLinkProps = BreadcrumbLinkBaseProps & {
  onPress?: () => void;
};

export const BreadcrumbLink = React.forwardRef<View, BreadcrumbLinkProps>(
  ({ asChild, className, children, onPress, ...props }, ref) => {
    const Comp = asChild ? Slot : Pressable;

    return (
      <Comp
        ref={ref}
        onPress={onPress}
        className={cn(
          'hover:text-foreground active:text-foreground flex flex-row items-center transition-colors',
          className,
        )}
        {...props}
      >
        {wrapTextChildren(children, Text, {
          className: 'text-muted-foreground hover:text-foreground text-sm font-medium',
        })}
      </Comp>
    );
  },
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbPage = React.forwardRef<View, BreadcrumbPageBaseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        role="link"
        aria-disabled={true}
        aria-current="page"
        className={cn('flex flex-row items-center', className)}
        {...props}
      >
        {wrapTextChildren(children, Text, {
          className: 'text-foreground text-sm font-normal',
        })}
      </View>
    );
  },
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

export const BreadcrumbSeparator = ({ children, className, ...props }: BreadcrumbSeparatorBaseProps) => {
  return (
    <View
      role="presentation"
      aria-hidden={true}
      className={cn('flex flex-row items-center justify-center', className)}
      {...props}
    >
      {children ?? <ChevronRight size={14} className="text-muted-foreground" />}
    </View>
  );
};
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export const BreadcrumbEllipsis = ({ className, children, ...props }: BreadcrumbEllipsisBaseProps) => {
  return (
    <View
      role="presentation"
      aria-hidden={true}
      className={cn('flex h-9 w-9 flex-row items-center justify-center', className)}
      {...props}
    >
      {children ?? <MoreHorizontal size={14} className="text-muted-foreground" />}
    </View>
  );
};
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';
