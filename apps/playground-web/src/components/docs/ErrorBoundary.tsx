import { Button } from '@gv-tech/ui-web';
import { AlertTriangle } from 'lucide-react';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="border-destructive/50 bg-destructive/5 flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 text-center">
          <AlertTriangle className="text-destructive mb-4 h-12 w-12" />
          <h2 className="mb-2 text-xl font-semibold">Something went wrong</h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            This documentation page encountered an error during rendering. This usually happens when a native component
            fails to shim correctly on the web.
          </p>
          <div className="bg-background text-destructive mb-6 max-w-full overflow-auto rounded border p-4 text-left font-mono text-sm">
            {this.state.error?.message}
          </div>
          <Button variant="outline" onClick={() => this.setState({ hasError: false, error: null })}>
            Try Again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
