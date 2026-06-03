import type { DirectionProviderBaseProps } from '@gv-tech/ui-core';

function DirectionProvider({ children, dir, direction }: DirectionProviderBaseProps) {
  // RN direction is mostly handled via I18nManager
  return <>{children}</>;
}

function useDirection() {
  return 'ltr';
}

export { DirectionProvider, useDirection };
