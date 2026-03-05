export interface ScrollToTopBaseProps {
  /**
   * Number of pixels that must be scrolled before the control appears.
   *
   * @default 240
   */
  threshold?: number;
  /**
   * Delay in milliseconds before the page scroll-to-top is triggered,
   * allowing the exit animation to complete first.
   *
   * @default 450
   */
  exitDuration?: number;
  /**
   * Scroll behavior used when returning to the top.
   *
   * @default 'smooth'
   */
  behavior?: ScrollBehavior;
  /** Optional className for custom positioning and styling. */
  className?: string;
  /** Accessible label for the control. */
  label?: string;
}
