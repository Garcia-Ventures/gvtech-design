export interface ThemeToggleBaseProps {
  /**
   * The mode of the theme toggle. 'binary' allows toggling between light and dark. 'ternary' allows choosing between
   * light, dark, and system.
   *
   * @default 'binary'
   */
  variant?: 'binary' | 'ternary';
  /** Optional callback when the theme changes. */
  onThemeChange?: (theme: string) => void;
  /** Optional current theme value for external control. */
  customTheme?: string;
  /** Optional className for the button. */
  className?: string;
}
