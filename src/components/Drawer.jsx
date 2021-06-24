import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Justify } from 'react-bootstrap-icons';


function Drawer() {
  const [navToggle, setNavToggle] = useState(false);
  const toggleNav = () => {
    setNavToggle(!navToggle);
  }
  const variants = {
    hidden: {
      width: 0
    },
    visible: {
      width: "35vw",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.4,
        type: "tween"
      }
    },

  }
  const item = { hidden: { x: -10, opacity: 0 }, visible: { x: 0, opacity: 1 } }
  const overlay = {
    hidden: { width: 0 },
    visible: {
      width: "100vw",
      transition: {
        type: "tween"
      }
    }
  }
  return (
    <>
      <h2><Justify className="floating-menu btn-outline-light" onClick={toggleNav} /></h2>
      {navToggle &&
        <>
          <motion.div
            id="mySidenav"
            className="sidenav py-5"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <motion.h2 className="closebtn" onClick={toggleNav}>&times;</motion.h2>
            <motion.h3 variants={item}><a href="/worldNews"> WORLD NEWS  </a></motion.h3>
            <motion.h3 variants={item}><a href="/business">BUSINESS</a></motion.h3>
            <motion.h3 variants={item}><a href="/technology">TECHNOLOGY</a></motion.h3>
            <motion.h3 variants={item}><a href="/sports">SPORTS</a></motion.h3>
          </motion.div >
          <motion.div variants={overlay} initial="hidden"
            animate="visible" className="overlay" onClick={toggleNav}></motion.div></>}
    </>
  );
}
export default Drawer;
