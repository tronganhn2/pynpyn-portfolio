/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://dennis-snellenberg-portfolio.vercel.app/'),
  title: {
    template: '%s | Pham Yen Nhi',
    default: 'Pham Yen Nhi • Freelance Designer & Developer',
  },
  description:
    'I am a passionate and creative 4th year interior design student. With a strong eye for detail and a keen understanding of space planning, I am driven to transform functional spaces into beautiful and inspiring environments. © Pham Yen Nhi Portfolio',
  generator: 'Pham Yen Nhi',
  applicationName: 'Pham Yen Nhi',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Develope', 'Freelance'],
  authors: [
    { name: 'Ali Bagheri', url: 'https://www.github.com/alibagheri2079' },
  ],
  creator: 'Ali Bagheri',
  publisher: 'Ali Bagheri',
  twitter: {
    card: 'summary_large_image',
    title: 'Pham Yen Nhi',
    description:
      'I am a passionate and creative 4th year interior design student. With a strong eye for detail and a keen understanding of space planning, I am driven to transform functional spaces into beautiful and inspiring environments. © Pham Yen Nhi Portfolio',
    siteId: '1467726470533754880',
    creator: '@AliBagheri2079',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://dennis-snellenberg-portfolio.vercel.app/screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
