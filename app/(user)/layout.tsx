import Banner from "@/components/Banner";
import "../../styles/globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />

        {children}
      </body>
    </html>
  );
}
