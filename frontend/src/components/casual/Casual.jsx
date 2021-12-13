import TopNav from "../navs/TopNav";
import BottomNav from "../navs/BottomNav";
import Banner from "../Banner";

// import styles from "../componentsCategory/components.module.css";

const Casual = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
      <Banner imageUrl="https://i.imgur.com/zEoGFrG.jpg" department="casual"/>
    </>
  );
};

export default Casual;
