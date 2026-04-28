import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import Header from "./components/header";
import Footer from "./components/footer";
import { CurrencyProvider } from "./context/CurrencyContext";
import { GeoIpInit } from "./components/geoipinit";
import { isValidCurrency } from "./lib/currency";
import type { Currency } from "./lib/currency";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travaround - Your Travel Companion",
  description: "Explore the world with Travaround",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read geo-detected (or user-chosen) currency from the cookie set by middleware
  const cookieStore = await cookies();
  const raw = cookieStore.get("currency")?.value ?? "INR";
  const initialCurrency: Currency = isValidCurrency(raw) ? raw : "INR";

  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex flex-col min-h-screen">
        <CurrencyProvider initialCurrency={initialCurrency}>
          <GeoIpInit />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
