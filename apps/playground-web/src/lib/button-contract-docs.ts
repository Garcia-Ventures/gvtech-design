import { buttonSizeValues, buttonVariantValues, type ButtonSize } from '@gv-tech/ui-core';

/** Quote a contract union so a props table cannot drift from the source array. */
export function quoteUnion(values: readonly string[]): string {
  return values.map((value) => `"${value}"`).join(' | ');
}

export const buttonVariantType = quoteUnion(buttonVariantValues);
export const buttonSizeType = quoteUnion(buttonSizeValues);

export function isIconButtonSize(size: ButtonSize): boolean {
  return size === 'icon' || size.startsWith('icon-');
}

export function buttonSizeLabel(size: ButtonSize): string {
  switch (size) {
    case 'default':
      return 'Default';
    case 'xs':
      return 'Extra small';
    case 'sm':
      return 'Small';
    case 'lg':
      return 'Large';
    default:
      return size;
  }
}
