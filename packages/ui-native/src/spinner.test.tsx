import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner } from './spinner';

describe('Spinner (Native Implementation)', () => {
  it('renders correctly', () => {
    const { container } = render(<Spinner />);
    const progressbar = container.querySelector('[role="progressbar"]');
    expect(progressbar).toBeDefined();
    expect(progressbar).not.toBeNull();
  });

  it('renders custom test id or other attributes correctly', () => {
    const { container } = render(<Spinner testID="custom-spinner" />);
    // In react-native-web (used under the hood by vitest config for native)
    // testID usually maps to data-testid.
    const spinner = container.querySelector('[data-testid="custom-spinner"]');
    expect(spinner).toBeDefined();
    expect(spinner).not.toBeNull();
  });
});
