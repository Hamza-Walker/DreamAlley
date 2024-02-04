'use client'

import "./globals.css";

import { Inter } from "next/font/google";
import React from 'react'
import { trpc } from "@/utils/trpc";

const inter = Inter({ subsets: ["latin"] });


const RootLayout: React.FC<Readonly<{ 
  children: React.ReactNode }>> = (
    { children }) => {
return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default trpc.withTRPC(RootLayout);
