export interface SwitchBaseProps {
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string | number | readonly string[];
  id?: string;
}
