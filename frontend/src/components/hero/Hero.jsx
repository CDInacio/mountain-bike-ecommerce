import classes from "./hero.module.css";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <img src="https://i.imgur.com/1arVXy2.jpg" />
      <h1>Produtos de qualidade</h1>
    </div>
  );
};

export default Hero;
