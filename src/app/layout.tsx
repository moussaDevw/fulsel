import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Fulser | Investissement Immobilier d'Exception",
  description: "Découvrez des opportunités d'investissement immobilier d'exception avec Fulser, votre partenaire immobilier de confiance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} ${raleway.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
