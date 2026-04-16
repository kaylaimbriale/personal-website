import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kayla Imbriale",
  description: "Personal portfolio of Kayla Imbriale, CS student and software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white border-b border-petal px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-foreground font-bold text-lg hover:text-rose transition">
              Kayla Imbriale
            </Link>
            <div className="flex gap-8">
              <Link href="/about" className="text-mauve text-sm font-medium hover:text-rose transition">
                About
              </Link>
              <Link href="/projects" className="text-mauve text-sm font-medium hover:text-rose transition">
                Projects
              </Link>
              <Link href="/resume" className="text-mauve text-sm font-medium hover:text-rose transition">
                Resume
              </Link>
              <Link href="/contact" className="text-mauve text-sm font-medium hover:text-rose transition">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="bg-white border-t border-petal px-6 py-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-mauve text-sm">
              © 2026 Kayla Imbriale
            </p>
            <div className="flex gap-6">
              
              <a href="https://github.com/kaylaimbriale"
                className="text-mauve text-sm hover:text-rose transition"
              >
                GitHub
              </a>
              
              <a href="https://linkedin.com/in/kaylaimbriale"
                className="text-mauve text-sm hover:text-rose transition"
              >
                LinkedIn
              </a>
              
              <a href="mailto:kayla.imbriale@gmail.com"
                className="text-mauve text-sm hover:text-rose transition"
              >
                Email
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}