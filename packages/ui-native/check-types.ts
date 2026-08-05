import DateTimePicker from '@react-native-community/datetimepicker';
import { ComponentProps } from 'react';

type P = ComponentProps<typeof DateTimePicker>;
export type OnValueChange = NonNullable<P['onValueChange']>;
export type OnDismiss = NonNullable<P['onDismiss']>;
