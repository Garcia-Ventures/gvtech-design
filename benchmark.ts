import { docConfig } from './apps/playground-web/src/config/docs.ts';

function findRouteNPlus1(slug: string) {
    for (const category of docConfig) {
      const found = category.items.find((item) => item.href === slug);
      if (found) {
        return found;
      }
    }
    return null;
}

const routeMap = new Map();
for (const category of docConfig) {
  for (const item of category.items) {
    routeMap.set(item.href, item);
  }
}

function findRouteOptimized(slug: string) {
    return routeMap.get(slug) || null;
}

const N = 1000000;
const testSlug = 'table-of-contents';

console.log("Warming up...");
for (let i = 0; i < 10000; i++) {
    findRouteNPlus1(testSlug);
    findRouteOptimized(testSlug);
}

let start = performance.now();
for (let i = 0; i < N; i++) {
    findRouteNPlus1(testSlug);
}
let end = performance.now();
console.log(`Current N+1: ${(end - start).toFixed(2)} ms`);

start = performance.now();
for (let i = 0; i < N; i++) {
    findRouteOptimized(testSlug);
}
end = performance.now();
console.log(`Optimized O(1): ${(end - start).toFixed(2)} ms`);
