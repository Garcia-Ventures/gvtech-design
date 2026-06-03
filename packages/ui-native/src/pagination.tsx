import type {
  PaginationBaseProps,
  PaginationContentBaseProps,
  PaginationEllipsisBaseProps,
  PaginationItemBaseProps,
  PaginationLinkBaseProps,
  PaginationNextBaseProps,
  PaginationPreviousBaseProps,
} from '@gv-tech/ui-core';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react-native';
import * as React from 'react';
import { View } from 'react-native';
import { Button } from './button';
import { cn } from './lib/utils';
import { Text } from './text';

export const Pagination = ({ className, children, ...props }: PaginationBaseProps) => {
  return (
    <View
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full flex-row justify-center', className)}
      {...props}
    >
      {children}
    </View>
  );
};
Pagination.displayName = 'Pagination';

export const PaginationContent = React.forwardRef<View, PaginationContentBaseProps>(
  ({ className, children, ...props }, ref) => (
    <View ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props}>
      {children}
    </View>
  ),
);
PaginationContent.displayName = 'PaginationContent';

export const PaginationItem = React.forwardRef<View, PaginationItemBaseProps>(
  ({ className, children, ...props }, ref) => (
    <View ref={ref} className={cn('', className)} {...props}>
      {children}
    </View>
  ),
);
PaginationItem.displayName = 'PaginationItem';

export type PaginationLinkProps = PaginationLinkBaseProps & {
  onPress?: () => void;
};

export const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  children,
  onPress,
  ...props
}: PaginationLinkProps) => {
  return (
    <Button variant={isActive ? 'outline' : 'ghost'} size={size} onPress={onPress} className={className} {...props}>
      {children}
    </Button>
  );
};
PaginationLink.displayName = 'PaginationLink';

export const PaginationPrevious = ({
  className,
  children,
  onPress,
  ...props
}: PaginationPreviousBaseProps & { onPress?: () => void }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn('flex flex-row items-center gap-1 pl-2.5', className)}
    onPress={onPress}
    {...props}
  >
    <ChevronLeft size={16} className="text-foreground" />
    <Text className="text-sm font-medium">Previous</Text>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

export const PaginationNext = ({
  className,
  children,
  onPress,
  ...props
}: PaginationNextBaseProps & { onPress?: () => void }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn('flex flex-row items-center gap-1 pr-2.5', className)}
    onPress={onPress}
    {...props}
  >
    <Text className="text-sm font-medium">Next</Text>
    <ChevronRight size={16} className="text-foreground" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

export const PaginationEllipsis = ({ className, ...props }: PaginationEllipsisBaseProps) => (
  <View aria-hidden className={cn('flex h-9 w-9 flex-row items-center justify-center', className)} {...props}>
    <MoreHorizontal size={16} className="text-foreground" />
  </View>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';
