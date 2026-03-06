import Script from 'next/script';
import { Bebas_Neue, Inter, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import CookieBanner from '@/components/CookieBanner';
import ScrollToTop from '@/components/ScrollToTop';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://gta6cheatshub.com'),
  title: { default: 'GTA Cheats Hub — The #1 Source for GTA Cheat Codes', template: '%s | GTA Cheats Hub' },
  description: 'The most complete GTA 5 and GTA 6 cheat code database. Every cheat code for PS5, PS4, Xbox, and PC with step by step instructions. Updated daily.',
  openGraph: { title: 'GTA Cheats Hub — The #1 Source for GTA Cheat Codes', description: 'The most complete GTA 5 and GTA 6 cheat code database. Every cheat code for PS5, PS4, Xbox, and PC.', url: 'https://gta6cheatshub.com', siteName: 'GTA Cheats Hub', type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title: 'GTA Cheats Hub', description: 'The most complete GTA 5 and GTA 6 cheat code database.' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://gta6cheatshub.com' },
  verification: { google: 'rhvWEX_AoKyPEIixU7R4i9qmz83cOtle2Ve3ymKbzeM' },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png', sizes: '32x32' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3613596855061864" strategy="afterInteractive" crossOrigin="anonymous" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-V8S8QJRQ9G" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', { analytics_storage: 'denied' });
          gtag('config', 'G-V8S8QJRQ9G');
        `}</Script>
      </head>
      <body className="font-body bg-background text-text-primary antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileBottomNav />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
