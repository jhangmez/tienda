import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/','/login/'],
    },
    sitemap: 'https://gamarra.vercel.app.xyz/sitemap.xml',
  }
}