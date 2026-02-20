import * as React from 'react';
import { Text, type TextProps } from 'react-native';

// Wraps raw strings or numbers in a React Native <Text> component.
// Prevents "Unexpected text node" errors in React Native environments.
export function wrapTextChildren(
  children: React.ReactNode,
  TextComponent: React.ComponentType<TextProps> = Text,
  textProps: TextProps = {},
): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return <TextComponent {...textProps}>{child}</TextComponent>;
    }
    return child;
  });
}
