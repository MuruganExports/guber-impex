import { useEffect } from 'react';

/**
 * Updates document title and standard meta / Open Graph tags per route.
 */
export default function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | GUBER IMPEX`
      : 'GUBER IMPEX | Quality Cashew Kernels for Wholesale Markets';

    document.title = fullTitle;

    const updateMetaTag = (selector, attribute, value) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (selector.includes('property=')) {
          tag.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        } else if (selector.includes('name=')) {
          tag.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute(attribute, value);
    };

    if (description) {
      updateMetaTag('meta[name="description"]', 'content', description);
      updateMetaTag('meta[property="og:description"]', 'content', description);
    }
    updateMetaTag('meta[property="og:title"]', 'content', fullTitle);
  }, [title, description]);

  return null;
}
