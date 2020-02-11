import React from "react"
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "./utility/ErrorBoundary";

export const headerHeight = 86;

const Layout = ({children}) => {

  return (
      <ErrorBoundary>
        <Header height={headerHeight}/>
        <main style={{minHeight: '100vh'}}>
          <div style={{height: headerHeight, width: '100%'}}/>
          {children}
        </main>
        <Footer/>
      </ErrorBoundary>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
