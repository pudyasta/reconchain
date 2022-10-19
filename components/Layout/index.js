import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Recon Chain | Reduce Carbon With Blockchain </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
