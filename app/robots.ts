import type { MetadataRoute } from 'next'

const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Amazonbot',
  'cohere-ai',
  'Meta-ExternalAgent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_BOTS, allow: '/' },
    ],
    sitemap: 'https://mbecolon.com/sitemap.xml',
    host: 'https://mbecolon.com',
  }
}
