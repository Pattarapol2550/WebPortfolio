import "./globals.css";
import TopMenu from "@/components/TopMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-pink-400 text-white min-h-screen">
        <TopMenu />
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}