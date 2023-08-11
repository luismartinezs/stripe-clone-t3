import localFont from "next/font/local";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const soehne = localFont({
  src: [
    {
      path: "../../public/fonts/test-soehne-extraleicht.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/test-soehne-extraleicht-kursiv.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/test-soehne-leicht.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/test-soehne-leicht-kursiv.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/test-soehne-buch.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/test-soehne-buch-kursiv.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/test-soehne-kraftig.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/test-soehne-kraftig-kursiv.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/test-soehne-halbfett.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/test-soehne-halbfett-kursiv.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/test-soehne-dreiviertelfett.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/test-soehne-dreiviertelfett-kursiv.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/test-soehne-fett.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/test-soehne-fett-kursiv.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/test-soehne-extrafett.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/test-soehne-extrafett-kursiv.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-soehne",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={soehne.className}>
      <Component {...pageProps} />;
    </div>
  );
};

export default MyApp;
