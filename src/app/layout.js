import React from 'react';
import {Spline_Sans_Mono, Work_Sans,} from 'next/font/google';
import clsx from 'clsx';

import {BLOG_TITLE, DARK_TOKENS, LIGHT_TOKENS} from '@/constants';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles.css';
import RespectMotionPreferences from "@/components/RespectMotionPreferences";

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

export const metadata = {
  title: BLOG_TITLE,
  description: '개발 기록 저장소'
}

function RootLayout({children}) {
  const theme = 'light';

  return (
      <RespectMotionPreferences>
        <html
            lang="en"
            className={clsx(mainFont.variable, monoFont.variable)}
            data-color-theme={theme}
            style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
        >
        <body>
        <Header theme={theme}/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
      </RespectMotionPreferences>
  );
}

export default RootLayout;
