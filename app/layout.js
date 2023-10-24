import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";

import "./globals.css";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className=" mx-auto px-5 w-full max-w-[1200px]">
            <NavBar />
            <div>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
