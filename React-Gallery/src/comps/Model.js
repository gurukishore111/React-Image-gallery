import React, { Component } from "react";
import { motion } from "framer-motion";

function Modals({ selectedImg, setSelected }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };

  return (
    <motion.div className="backdrop" onClick={handleClick}>
      <motion.img
        src={selectedImg}
        alt="enlarge-img"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default Modals;
