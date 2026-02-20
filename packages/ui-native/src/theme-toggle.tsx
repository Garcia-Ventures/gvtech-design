import { Text, TouchableOpacity, View } from 'react-native';

export function ThemeToggle() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={{ padding: 10, backgroundColor: '#eee', borderRadius: 5 }}>
        <Text>Toggle Theme</Text>
      </View>
    </TouchableOpacity>
  );
}
