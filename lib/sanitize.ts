const SAFE_TAGS = new Set([
  'p', 'br', 'b', 'i', 'u', 'em', 'strong', 'a', 'ul', 'ol', 'li',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'code',
  'span', 'div', 'img', 'figure', 'figcaption', 'hr', 'table',
  'thead', 'tbody', 'tr', 'th', 'td', 'sup', 'sub', 'small',
  'video', 'source', 'audio',
])

export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/<embed[\s\S]*?<\/embed>/gi, '')
    .replace(/<object[\s\S]*?<\/object>/gi, '')
    .replace(/<link[\s\S]*?>/gi, '')
    .replace(/<meta[\s\S]*?>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/on\w+\s*=\s*\S+/gi, '')
    .replace(/javascript\s*:/gi, 'blocked:')
    .replace(/data\s*:\s*text\/html/gi, '')
    .replace(/style\s*=\s*["'][^"']*["']/gi, '')
    .replace(/<(\w+)([^>]*)>/g, (match, tag: string) => {
      if (!SAFE_TAGS.has(tag.toLowerCase())) return match
      return `<${tag}>`
    })
}
