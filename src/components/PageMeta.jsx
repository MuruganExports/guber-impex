import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://guber-impex.vercel.app';
const DEFAULT_IMAGE = '/images/hero-cashews.jpg';
const DEFAULT_IMAGE_ALT =
  'Raw whole ivory-white cashew kernels in a wooden bowl from GUBER IMPEX';
const DEFAULT_KEYWORDS =
  'GUBER IMPEX, cashew nut wholesale, wholesale cashew kernels, Tamil Nadu cashew supplier, W240 cashew kernels, W320 cashew kernels, W440 cashew kernels, cashew splits 1/2';

/**
 * Updates document title, canonical URL, keywords, meta description,
 * Open Graph tags, and Twitter Card metadata per route.
 */
export default function PageMeta({
  title,
  description,
  keywords,
  canonicalPath,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title
      ? `${title} | GUBER IMPEX`
      : 'GUBER IMPEX | Quality Cashew Kernels for Wholesale Markets';

    const resolvedPath = canonicalPath ?? pathname;
    const normalizedPath = resolvedPath === '/' ? '/' : resolvedPath.replace(/\/+$/, '');
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    document.title = fullTitle;

    const upsertMeta = (attrName, attrValue, content) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
      upsertMeta('name', 'twitter:description', description);
    }

    upsertMeta('name', 'keywords', keywords || DEFAULT_KEYWORDS);
    upsertMeta(
      'name',
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:image', absoluteImage);
    upsertMeta('property', 'og:image:alt', imageAlt);

    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:image', absoluteImage);
    upsertMeta('name', 'twitter:image:alt', imageAlt);
  }, [title, description, keywords, canonicalPath, pathname, image, imageAlt]);

  return null;
}
