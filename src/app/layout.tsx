import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://hoja-cv.vercel.app";

export const viewport: Viewport = {
  themeColor: "#f4f5f7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jose Luis Gómez | Full-Stack Developer (Next.js)",
    template: "%s | Jose Luis Gómez",
  },
  description:
    "CV de Jose Luis Gómez, Full-Stack Developer con 4+ años de experiencia construyendo aplicaciones web completas con Next.js, React, TypeScript, Node.js y PostgreSQL. Tres productos llevados de la arquitectura a producción.",
  applicationName: "Jose Luis Gómez Portfolio",
  authors: [{ name: "Jose Luis Gómez", url: siteUrl }],
  creator: "Jose Luis Gómez",
  keywords: [
    "Jose Luis Gómez",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Stripe",
    "Kubernetes",
    "DevOps",
    "Medellín",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jose Luis Gómez | Full-Stack Developer (Next.js)",
    description:
      "Full-Stack Developer con 4+ años de experiencia: Next.js, React, TypeScript, Node.js y PostgreSQL. Tres productos en producción construidos de arquitectura a deploy por mí.",
    url: siteUrl,
    siteName: "Jose Luis Gómez Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jose Luis Gómez | Full-Stack Developer (Next.js)",
    description:
      "Full-Stack Developer con 4+ años de experiencia en el ecosistema Next.js.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}