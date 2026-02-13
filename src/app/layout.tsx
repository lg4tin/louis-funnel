import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaS Motion Ads — Launch Ads from $2,000 / 15s",
  description:
    "UI-first SaaS motion ads for launches, paid social, and landing pages. Launch ads from $2,000 per 15 seconds. Book a call.",
  openGraph: {
    title: "SaaS Motion Ads — Launch Ads from $2,000 / 15s",
    description:
      "UI-first motion ads built for clarity and clicks. Script → Design → Animation. Book a call.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
