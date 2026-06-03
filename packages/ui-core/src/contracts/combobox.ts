export interface ComboboxValueBaseProps {
  className?: string;
}

export interface ComboboxTriggerBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ComboboxClearBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ComboboxInputBaseProps {
  className?: string;
  disabled?: boolean;
  showTrigger?: boolean;
  showClear?: boolean;
  children?: React.ReactNode;
}

export interface ComboboxContentBaseProps {
  className?: string;
  side?: 'top' | 'right' | 'bottom' | 'left' | 'inline-end' | 'inline-start';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  anchor?: any;
}

export interface ComboboxListBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ComboboxItemBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ComboboxGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ComboboxLabelBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ComboboxCollectionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ComboboxEmptyBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ComboboxSeparatorBaseProps {
  className?: string;
}

export interface ComboboxChipsBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ComboboxChipBaseProps {
  className?: string;
  showRemove?: boolean;
  children?: React.ReactNode;
}

export interface ComboboxChipsInputBaseProps {
  className?: string;
}
