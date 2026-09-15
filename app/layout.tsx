import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kassia Vieira | Advocacia e Consultoria Jurídica",
  description:
    "Kassia Vieira — advocacia e consultoria jurídica. Atendimento personalizado, estratégico e humanizado.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}