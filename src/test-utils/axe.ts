import axe from 'axe-core';

export async function assertNoA11yViolations(container: HTMLElement | Document) {
  const results = await axe.run(container as unknown as Node);
  if (results.violations && results.violations.length > 0) {
    const messages = results.violations
      .map((v: unknown) => {
        const violation = v as {
          id: string;
          impact?: string | null;
          help: string;
          nodes: Array<{ target: string[]; failureSummary?: string; html?: string }>;
        };

        const nodes = violation.nodes
          .map((n) => `  - ${n.target.join(', ')}: ${n.failureSummary || n.html || ''}`)
          .join('\n');
        return `${violation.id} (${violation.impact || 'unknown'}): ${violation.help}\n${nodes}`;
      })
      .join('\n\n');
    throw new Error(`Accessibility violations detected:\n\n${messages}`);
  }
}

export default assertNoA11yViolations;
