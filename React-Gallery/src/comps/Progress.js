import React, { useEffect } from "react";
import useStrorage from "./hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setfile }) => {
  const { url, progress } = useStrorage(file);
  useEffect(() => {
    if (url) {
      setfile(null);
    }
  }, [url]);
  // console.log(progress, url);
  return (
    <motion.div
      className="progress-bar"
      style={{ width: progress + "%" }}
    ></motion.div>
  );
};
export default ProgressBar;
