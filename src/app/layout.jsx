import '../index.css';
import AppShell from '../components/AppShell';

export const metadata = {
  title: "Sofnest | Daily Panty Liners & Thoughtful Women's Hygiene Care",
  description: "Sofnest provides thoughtful women's care designed for everyday freshness, period days, and every moment in between. Discover our breathable 155mm & 180mm Panty Liners.",
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  themeColor: '#0d6849',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
