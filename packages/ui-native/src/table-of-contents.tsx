import { TableOfContentsContentBaseProps, TableOfContentsRootBaseProps } from '@gv-tech/ui-core';
import { Text, View } from 'react-native';

export function TableOfContents({ children }: TableOfContentsRootBaseProps) {
  return <View>{children}</View>;
}

TableOfContents.List = function TableOfContentsList() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ color: '#888', fontStyle: 'italic' }}>Table of Contents not implemented natively.</Text>
    </View>
  );
};

TableOfContents.Content = function TableOfContentsContent({ children }: TableOfContentsContentBaseProps) {
  return <View>{children}</View>;
};
