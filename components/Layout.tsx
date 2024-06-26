import React, { ReactNode } from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Frontend" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Toaster />
    {children}
  </div>
);

export default Layout;
