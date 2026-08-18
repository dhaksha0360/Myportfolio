import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: { default: `${personal.name} | ${personal.title}`, template: `%s | ${personal.name}` },
  description: "Associate Software Engineer portfolio showcasing full-stack development, web applications, machine learning projects and software engineering experience.",
  openGraph: { title: `${personal.name} | ${personal.title}`, description: "Full-stack software engineering and machine learning portfolio.", type: "website", images: ["/profile/hero-studio.png"] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body><ThemeProvider><Navbar />{children}</ThemeProvider></body></html>; }
