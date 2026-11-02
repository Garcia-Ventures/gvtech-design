import { useTheme } from '@gv-tech/ui-web';

const marks = {
  light: '/brand/monogram-green.png',
  dark: '/brand/monogram-green-dark.png',
} as const;

export function BrandMark({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const src = resolvedTheme === 'dark' ? marks.dark : marks.light;

  return <img src={src} alt="Garcia Ventures" className={className} />;
}
