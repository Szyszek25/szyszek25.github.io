// Lightweight analytics helpers. Works with GA4 if gtag is present; otherwise logs to console.

export function trackEvent({ category, action, label, value }) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', action || 'event', {
        event_category: category || 'general',
        event_label: label,
        value,
      });
    } else {
      // Fallback: console log for visibility during development
      // eslint-disable-next-line no-console
      console.debug('[analytics]', { category, action, label, value });
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Analytics error:', e);
  }
}

export function trackLinkClick(label, url) {
  trackEvent({ category: 'link', action: 'click', label: `${label} | ${url}` });
}
