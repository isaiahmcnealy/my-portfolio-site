"use client";

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Isaiah McNealy - Portfolio</title>
        <meta name="description" content="Isaiah McNealy's Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/kMVq6tY6yFf2txf5Y1bq+IjIxu8dJk8niIBW6yW0b0YcRT1Z6qtcWBL98jvdg9B5Z6NVk+8dKli0Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}