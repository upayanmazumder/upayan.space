"use client"

import { Analytics } from "@vercel/analytics/react"
import React from "react";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

import localFont from "next/font/local";

export default function RootLayoutClient({ children }) {

    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header />
                <Navbar />
                {children}
                <Analytics />
                <Footer />
            </body>
        </html>
    );
}