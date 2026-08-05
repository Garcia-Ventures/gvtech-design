import * as React from 'react';

export interface InputOTPBaseProps {
  className?: string;
  containerClassName?: string;
}

export interface InputOTPGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface InputOTPSlotBaseProps {
  className?: string;
  index: number;
}

export interface InputOTPSeparatorBaseProps {
  className?: string;
}
