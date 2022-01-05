import "../assets/css/Footer.css";

import { Typography } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const Footer = () => {
  return (
    <footer>
      <div className="socials">
      <Typography variant="h6"><div className="logo"><span>Hard Line</span></div></Typography>
        <div>
          <Facebook />
          <Instagram sx={{marginLeft: "30px"}} />
          <Twitter sx={{marginLeft: "30px"}} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
