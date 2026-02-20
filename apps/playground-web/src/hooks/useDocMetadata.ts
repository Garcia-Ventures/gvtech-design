import * as React from 'react';

export interface DocMetadata {
  title: string;
  description?: string;
}

export function useDocMetadata({ title, description }: DocMetadata) {
  React.useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute('content');

    // Update title
    document.title = `${title} | GV Tech Design System`;

    // Update description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        document.querySelector('meta[name="description"]')?.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
