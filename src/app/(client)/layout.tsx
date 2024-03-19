import React from "react";
import Footer from "~/app/(client)/components/Footer";
import Header from "~/app/(client)/components/header/Header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;