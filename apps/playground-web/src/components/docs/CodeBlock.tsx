import { cn } from '@gv-tech/ui-web';
import { Check, Copy } from 'lucide-react';
import * as React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = 'tsx', className }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn('group relative', className)}>
      <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 font-mono text-sm text-zinc-100">
        <code className={`language-${language}`}>{code.trim()}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 rounded-md bg-zinc-800 p-2 text-zinc-400 opacity-0 transition-colors group-hover:opacity-100 hover:bg-zinc-700 hover:text-zinc-100"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
