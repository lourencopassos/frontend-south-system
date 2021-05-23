import React from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header/header.index";

interface LayoutProps {
  title: string;
}

const AppLayout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Helmet>South Dragons - {title}</Helmet>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
