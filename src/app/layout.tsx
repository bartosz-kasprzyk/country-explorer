import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Country Explorer",
  description: "Explore countries, borders, regions and details",
  icons: {
    icon: [
      { url: "/icon192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
