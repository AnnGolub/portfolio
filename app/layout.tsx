import type { Metadata } from "next";
import { HashScrollOnLoad } from "@/components/HashScrollOnLoad";
import { Header } from "@/components/Header";
import { LetsTalkModalProvider } from "@/components/LetsTalkModalProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Product Designer`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <LetsTalkModalProvider>
          <HashScrollOnLoad />
          <SmoothScroll />
          <Header />
          <main>{children}</main>
        </LetsTalkModalProvider>
      </body>
    </html>
  );
}
