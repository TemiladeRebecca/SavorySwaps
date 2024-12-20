import MainHeader from "@/components/header/MainHeader";
import "./globals.css";

export const metadata = {
  title: "SavorySwap",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
