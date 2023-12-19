import type { Metadata } from 'next'
import { getCssText } from '@/styles/stitches.config';
import { Roboto } from 'next/font/google'
import { globalStyles } from "@/styles/global"
import logoImg from "../../public/logo.svg";
import { Container, Header } from "../styles/pages/app";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: '04 Ignite Shop',
  description: 'Curso React + Next'
}

globalStyles();


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={roboto.className} lang="en">
      <head>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
      <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

        {children}
    </Container>
      </body>
    </html>
  )
}
