import { describe, expect, test } from 'vitest';
import { docItemsMap } from '../config/docs';

// Original method: Querying the H1 from the DOM
function originalGetPageTitle(): string {
  return document.querySelector('h1')?.textContent?.trim() || document.title;
}

// Optimized method: Using route-metadata first, with fallback
function optimizedGetPageTitle(pathname: string): string {
  if (pathname.startsWith('/docs')) {
    const slug = pathname.split('/').filter(Boolean).pop() || 'getting-started';
    const doc = docItemsMap.get(slug) || null;
    if (doc?.item.title) {
      return doc.item.title;
    }
  }
  return document.querySelector('h1')?.textContent?.trim() || document.title;
}

describe('Plausible Analytics Performance Benchmark', () => {
  test('Establish Baseline & Demonstrate Speedup', () => {
    // Setup a realistic DOM tree to simulate a documentation page in JSDOM
    document.body.innerHTML = `
      <div id="root">
        <aside class="sidebar">
          <nav>
            <ul>
              ${Array.from({ length: 50 }, (_, i) => `<li><a href="/docs/link-${i}">Link ${i}</a></li>`).join('\n')}
            </ul>
          </nav>
        </aside>
        <main>
          <header>
            <h1 id="overview">Button</h1>
          </header>
          <article>
            <p>Some content describing the component...</p>
            ${Array.from({ length: 100 }, (_, i) => `<p>Paragraph ${i} of text</p>`).join('\n')}
          </article>
        </main>
      </div>
    `;

    document.title = 'Button | GV Tech Design';

    // Verify correctness: both approaches must yield correct result
    const pathname = '/docs/button';
    const titleOriginal = originalGetPageTitle();
    const titleOptimized = optimizedGetPageTitle(pathname);

    expect(titleOriginal).toBe('Button');
    expect(titleOptimized).toBe('Button');

    // Run baseline benchmark
    const iterations = 50000;

    const startOriginal = performance.now();
    for (let i = 0; i < iterations; i++) {
      originalGetPageTitle();
    }
    const endOriginal = performance.now();
    const durationOriginal = endOriginal - startOriginal;

    // Run optimized benchmark
    const startOptimized = performance.now();
    for (let i = 0; i < iterations; i++) {
      optimizedGetPageTitle(pathname);
    }
    const endOptimized = performance.now();
    const durationOptimized = endOptimized - startOptimized;

    const speedup = durationOriginal / durationOptimized;

    console.log(`\n==================================================`);
    console.log(`⚡ Performance Benchmark Results (${iterations} iterations)`);
    console.log(`--------------------------------------------------`);
    console.log(`Original DOM Query Method:  ${durationOriginal.toFixed(2)} ms`);
    console.log(`Optimized Metadata Method:  ${durationOptimized.toFixed(2)} ms`);
    console.log(`--------------------------------------------------`);
    console.log(`Measured Speedup:           ${speedup.toFixed(2)}x faster`);
    console.log(`==================================================\n`);

    // We expect the optimized method to be at least faster (typically 5x to 100x+ faster depending on environment)
    expect(durationOptimized).toBeLessThan(durationOriginal);
  });
});
