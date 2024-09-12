import { type AppType } from "next/app";
import { Familjen_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const grotesk = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <style
        jsx
        global
      >{`:root { --font-grotesk: ${grotesk.style.fontFamily};}}`}</style>
      <main className={`font-sans ${grotesk.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
