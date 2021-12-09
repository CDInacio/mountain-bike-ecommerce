import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";
import Banner from "../Banner";

import styles from "../componentsCategory/components.module.css";


const Accessories = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
      <Banner imageUrl="https://i.imgur.com/sreQWT9.jpg" department="Acessórios" />
    </>
  );
};

export default Accessories;
