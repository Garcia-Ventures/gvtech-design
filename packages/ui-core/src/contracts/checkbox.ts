// Shared Checkbox contracts.
// Both ui-web and ui-native implementations must satisfy these types.

// Platform-agnostic props shared by every Checkbox implementation.
export interface CheckboxBaseProps {
  checked?: boolean | 'indeterminate';
  defaultChecked?: boolean | 'indeterminate';
  disabled?: boolean;
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
}
