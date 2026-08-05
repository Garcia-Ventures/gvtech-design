import * as React from 'react';

export interface DocMetadata {
  title: string;
  description?: string;
}

// Module-level cache to avoid repeated DOM queries across hooks or layout updates
let cachedMetaDescription: HTMLMetaElement | null = null;

export function useDocMetadata({ title, description }: DocMetadata) {
  React.useEffect(() => {
    const previousTitle = document.title;

    // Retrieve cached element if still present in document.head
    if (!cachedMetaDescription || !document.head.contains(cachedMetaDescription)) {
      cachedMetaDescription = document.querySelector('meta[name="description"]');
    }

    let metaDescription = cachedMetaDescription;
    const previousDescription = metaDescription?.getAttribute('content');

    // Update title
    document.title = `${title} | GV Tech Design System`;

    // Update description
    if (description) {
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
        cachedMetaDescription = metaDescription;
      }
      metaDescription.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (previousDescription && metaDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
