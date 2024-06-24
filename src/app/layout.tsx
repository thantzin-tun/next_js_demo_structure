"use client";
import "./globals.css";
import Providers from "../lib/providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import HeaderCom from "phi/components/Header";
import FooterCom from "phi/components/Footer";
// Create a client
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>PHI</title>
      </Head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <QueryClientProvider client={queryClient}>
            <HeaderCom />
            {children}
            <FooterCom />
          </QueryClientProvider>
        </Providers>
      </body>
    </html>
  );
}
