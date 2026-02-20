// Shared Input contracts.
// Both ui-web and ui-native implementations must satisfy these types.

// Platform-agnostic props shared by every Input implementation.
// Avoids generic HTML props (value, defaultValue) that conflict with
// platform-specific typings (React DOM vs React Native).
export interface InputBaseProps {
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}
