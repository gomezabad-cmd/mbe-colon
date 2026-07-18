declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function trackLead(source: string) {
  window.fbq?.('track', 'Lead', { content_name: source })
}

export function trackViewContent(contentName: string, contentCategory: string) {
  window.fbq?.('track', 'ViewContent', {
    content_name: contentName,
    content_category: contentCategory,
  })
}

export function trackContact() {
  window.fbq?.('track', 'Contact')
}
