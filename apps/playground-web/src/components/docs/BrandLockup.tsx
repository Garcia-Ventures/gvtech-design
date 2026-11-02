import { useTheme } from '@gv-tech/ui-web';

const lockups = {
  light: '/brand/gvtech-lockup-green.png',
  dark: '/brand/gvtech-lockup-green-dark.png',
} as const;

export function BrandLockup({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const src = resolvedTheme === 'dark' ? lockups.dark : lockups.light;

  return <img src={src} alt="GV Tech" className={className} />;
}
