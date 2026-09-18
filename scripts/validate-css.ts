// CSS smoke check: compiles the real playground stylesheet through Tailwind
// and asserts that the selectors our components depend on are actually emitted.
//
// WHY: upstream shadcn components use bare `data-*:` variants (e.g.
// `data-horizontal:flex-col`, `data-active:bg-background`) and custom utilities
// (`scroll-fade-*`, `shimmer`, `no-scrollbar`). The bare variants only work
// because of `@custom-variant` definitions shipped in
// packages/design-tokens/src/vendor/shadcn.css. Without them the classes are
// silently dead: present in the DOM and in unit-test assertions, but matching
// nothing. Vitest/jsdom cannot catch this — only a real CSS compile can.
import tailwindcss from '@tailwindcss/postcss';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';

const root = process.cwd();
const entry = path.join(root, 'apps/playground-web/src/globals.css');

// Each pattern must match at least one emitted rule. Keep in sync with the
// classes used in packages/ui-web/src (see src/vendor/shadcn.css for the
// definitions that make the bare `data-*:` forms work).
const required: RegExp[] = [
  /\.data-horizontal\\:flex-col/, // tabs orientation
  /\.data-vertical\\:/, // separator/slider orientation
  /\.data-active\\:/, // active states (tabs, sidebar, …)
  /\.data-open\\:/, // dialogs, popovers, …
  /\.data-closed\\:/, // dialogs, popovers, …
  /\.data-checked\\:/, // checkboxes, switches, …
  /\.data-selected\\:/, // command items
  /\.data-disabled\\:/, // disabled states
  /\.group-data-checked\\[/]/, // questionnaire indicator (named-group form)
  /\.has-data-checked\\:/, // field labels
  /\.scroll-fade-b/, // message-scroller viewport
  /\.scroll-fade-x/, // attachment group
  /\.shimmer([^-]|$)/, // attachment loading states
  /\.no-scrollbar/, // attachment group
];

async function main() {
  const css = readFileSync(entry, 'utf8');
  const result = await postcss([tailwindcss()]).process(css, { from: entry });
  const missing = required.filter((re) => !re.test(result.css));
  if (missing.length > 0) {
    console.error(`❌ CSS smoke check failed — ${missing.length} selector group(s) missing from compiled output:`);
    for (const re of missing) {
      console.error(`   - ${re.source}`);
    }
    console.error(
      'Hint: bare `data-*:` variants come from packages/design-tokens/src/vendor/shadcn.css, ' +
        'which sync-tokens appends to theme.css. Did a token sync drop it?',
    );
    process.exit(1);
  }
  console.log(`✅ CSS smoke check passed (${required.length} selector groups present, ${result.css.length} bytes).`);
}

main().catch((error) => {
  console.error('❌ CSS smoke check failed to run:', error);
  process.exit(1);
});
