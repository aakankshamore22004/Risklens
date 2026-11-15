import { Inter, Bricolage_Grotesque, Public_Sans } from "next/font/google";
import "./globals.css";
import "./theme.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const text = Public_Sans({ subsets: ["latin"], variable: "--font-text", display: "swap" });

export const metadata = {
  title: "RiskLens — Diabetes Risk Screening",
  description:
    "Answer 21 questions from the CDC's health survey and get a diabetes risk score with the factors behind it. An educational screening project, not a diagnosis.",
  keywords: "diabetes, risk assessment, health screening, BRFSS, CDC, machine learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${text.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
