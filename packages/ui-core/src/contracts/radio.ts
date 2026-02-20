// Shared Radio contracts.
// Both ui-web and ui-native implementations must satisfy these types.

// Platform-agnostic props shared by every RadioGroup implementation.
// Avoids value/onValueChange that conflict with Radix's prop typings.
export interface RadioGroupBaseProps {
  disabled?: boolean;
  className?: string;
}

// Platform-agnostic props shared by every RadioGroupItem implementation.
export interface RadioGroupItemBaseProps {
  value: string;
  disabled?: boolean;
  className?: string;
}
