// Shared Card contracts.
// Both ui-web and ui-native implementations must satisfy these types.

// Platform-agnostic props shared by every Card sub-component.
export interface CardBaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Card exports the same sub-components on both platforms.
export type CardSubComponent = 'Card' | 'CardHeader' | 'CardTitle' | 'CardDescription' | 'CardContent' | 'CardFooter';
