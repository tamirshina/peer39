import React from 'react'
import '../styles/globals.css'
import Router from "next/router";
import Loder from '../utilities/Loader'
//This app component sets global functionality and style.
//It override reacts App component, persisting each page with style and state. 
//In all cases while data is loaded and moving between pages (same case), we whant to show the user a spinner. 
//For all router cases of loading we use reacts useEffect to set loading staus.


export default function Peer39({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      {loading ? (
        <Loder />
      ) : (
          <Component {...pageProps} />
        )}
    </>
  );
}


