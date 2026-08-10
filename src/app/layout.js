import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Network Intelligence Technologies, Ltd (NIT)",
  description:
    "Network Intelligence Technologies, Ltd (NIT) is a leader in network security; Firewall implementation, SD-WAN Connectivity, multi-factor authentication, Email Security, Cloud & Data backup and network intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}