
import "./globals.css";
import GoogleAnalytics from "../../modulos/analytics";
import { getFonts } from '@/lib/fonts/fuentes'
import HeaderServer from '@/blocks/global/Header/Server'
import FooterServer from '@/blocks/global/Footer/Server'


export default async function RootLayout(props: { children: React.ReactNode }) {
  const fonts = await getFonts();

  const { children } = props

  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg-xml" href="/inah.svg" />
      <style suppressHydrationWarning>{`
          @font-face {
            font-family: '${fonts.primaryFont}';
            src: url('${fonts.primaryFontUrl}') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: '${fonts.secondaryFont}';
            src: url('${fonts.secondaryFontUrl}') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
          :root {
            --primary-font: '${fonts.primaryFont}', sans-serif;
            --secondary-font: '${fonts.secondaryFont}', serif;
          }
        `}</style>
      <GoogleAnalytics/>
      </head>
      <body>
      <HeaderServer/>
          {children}   
      <FooterServer/>  
      </body>
    </html>
  );
}
