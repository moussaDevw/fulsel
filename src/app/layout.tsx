import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

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
  description:
    "Découvrez des opportunités d'investissement immobilier d'exception avec Fulser, votre partenaire immobilier de confiance.",
  icons: {
    icon: "/assets/svgs/logo.svg",
  },
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
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
