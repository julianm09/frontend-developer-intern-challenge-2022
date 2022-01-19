import '../styles/globals.css'
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [saved, setSaved] = useState([])
  return <Component {...pageProps} saved={saved} setSaved={setSaved}/>
}

export default MyApp
