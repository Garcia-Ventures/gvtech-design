declare module '*.mdx' {
  import * as React from 'react';
  const MDXComponent: (props: Record<string, unknown>) => React.JSX.Element;
  export default MDXComponent;
}
