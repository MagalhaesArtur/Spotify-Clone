import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserID from "@/actions/getSongsByUserID";
import Player from "@/components/Player";
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";
import { AppWrapper } from "@/context";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to your favorite songs!",
  icons: {
    icon: "/ico.png", // /public path
  },
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserID();
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <AppWrapper>
          <SupabaseProvider>
            <ToasterProvider />
            <UserProvider>
              <ModalProvider products={products} />
              <Sidebar songs={userSongs}>{children}</Sidebar>
              <Player />
            </UserProvider>
          </SupabaseProvider>
        </AppWrapper>
      </body>
    </html>
  );
}
