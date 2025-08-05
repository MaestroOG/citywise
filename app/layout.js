import Navbar from "@/components/Navbar";
import "./globals.css";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "CityWise | AI-Powered Weather & Lifestyle Tips",
  description:
    "CityWise gives you smart, AI-generated lifestyle and safety tips based on your current city's weather. Stay ahead of the climate with personalized guidance tailored to real-time temperatures.",
  keywords: [
    "CityWise",
    "AI weather tips",
    "weather-based lifestyle tips",
    "Puter.js OpenAI integration",
    "Next.js weather app",
    "extreme heat advice",
    "smart city assistant",
    "climate-aware suggestions"
  ],
  authors: [{ name: "Muneeb Ur Rehman", url: "https://portfolio-lake-six-25.vercel.app/" }],
  openGraph: {
    title: "CityWise | AI-Powered Weather & Lifestyle Tips",
    description:
      "Get real-time AI-powered tips tailored to your city's weather with CityWise. Built using OpenAI and Next.js.",
    url: "https://portfolio-lake-six-25.vercel.app/",
    siteName: "CityWise",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`antialiased overflow-x-hidden`}
        >
          <Navbar />
          {children}

          <Script src="https://js.puter.com/v2/" strategy="beforeInteractive" />
        </body>
      </html>
    </ClerkProvider>
  );
}
