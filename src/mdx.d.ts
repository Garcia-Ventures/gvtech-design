declare module '*.mdx' {
  import * as React from 'react';
  const MDXComponent: (props: any) => React.JSX.Element;
  export default MDXComponent;
}
