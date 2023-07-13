import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from './global-styles.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesheet }
  ]
}

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
        <title>Remix DJ</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </head>
      <body className='bg-black text-white'>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html >
  );
}
