import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
<<<<<<< HEAD
=======
      <Head>
        <title>Recon Chain | Reduce Carbon With Blockchain </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
>>>>>>> develop
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
