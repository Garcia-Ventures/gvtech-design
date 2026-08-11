import { Card } from '@gv-tech/ui-web';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface FlutterComponentPreviewProps {
  route?: string; // e.g. 'button', 'card', 'badge'
  height?: number | string;
  title?: string;
}

export function FlutterComponentPreview({
  route = '',
  height = 460,
  title = 'Flutter Component Live Preview',
}: FlutterComponentPreviewProps) {
  const [key, setKey] = useState(0);

  const iframeSrc = route ? `/flutter/index.html#/${route}` : '/flutter/index.html';

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <Card className="w-full overflow-hidden border p-0 shadow-sm">
      <div className="bg-muted/40 flex items-center justify-between border-b px-4 py-2 text-xs">
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleRefresh}
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            title="Reload Preview"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
          <a
            href={iframeSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            title="Open Fullscreen Flutter Showcase"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="relative w-full" style={{ height }}>
        <iframe
          key={key}
          src={iframeSrc}
          title={title}
          className="bg-background h-full w-full border-none"
          loading="lazy"
        />
      </div>
    </Card>
  );
}
