import localFont from "next/font/local";
import { Audiowide } from "next/font/google";
import "./globals.css";

const ibmPlexSansArabic = localFont({
  src: [
    { path: "./fonts/IBMPlexSansArabic-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/IBMPlexSansArabic-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/IBMPlexSansArabic-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/IBMPlexSansArabic-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexSansArabic-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexSansArabic-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/IBMPlexSansArabic-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-ibm-plex",
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
});

export const metadata = {
  title: "مساكن الرفاهية",
  description: "شقق مفروشة بمستوى الرفاهية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${ibmPlexSansArabic.variable} ${audiowide.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
