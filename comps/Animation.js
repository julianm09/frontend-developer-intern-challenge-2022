import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import nasa from "../animations/nasa-logo.json";

const Nasa = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: nasa,
    });
    return () => lottie.stop();
  }, []);
  return <div style={{ height: 100, width: 100 }} ref={anime}></div>;
};

export default Nasa;
