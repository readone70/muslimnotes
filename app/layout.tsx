import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  weight: "400",
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "MuslimNotes",
  description: "The premium space to organize your Islamic learning, transform khutbahs into actionable insights, and grow your deen.",
  openGraph: {
    title: "MuslimNotes - Capture Knowledge. Reflect Deeply.",
    description: "The premium space to organize your Islamic learning, transform khutbahs into actionable insights, and grow your deen.",
    images: [
      { url: "https://muslimnotes.com/og-image.jpg" },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "MuslimNotes - Capture Knowledge. Reflect Deeply.",
  //   description: "The premium space to organize your Islamic learning, transform khutbahs into actionable insights, and grow your deen.",
  //   images: ["https://muslimnotes.com/og-image.jpg"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
