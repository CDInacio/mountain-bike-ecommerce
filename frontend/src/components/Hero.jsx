import { Typography } from "@material-ui/core";
import "../assets/css/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src="https://i.imgur.com/jILe6Zw.jpg" alt="hero" />
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "30%",
          left: "5%",
          color: "#fff",
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        Lorem ipsum dolor sit amet.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          top: "50%",
          left: "5%",
          color: "#fff",
          fontStyle: "italic",
          fontWeight: "regular",
        }}
      >
        Sed do eiusmod tempor.
      </Typography>
    </div>
  );
};

export default Hero;
