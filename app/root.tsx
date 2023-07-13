import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import stylesheet from './styles/tailwind.css';

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

      </body>
    </html >
  );
}
