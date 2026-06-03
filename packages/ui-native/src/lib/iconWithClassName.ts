import type { LucideIcon } from 'lucide-react-native';
import { cssInterop } from 'react-native-css-interop';

export function iconWithClassName(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}
