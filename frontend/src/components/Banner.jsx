import styles from "../components/componentsCategory/components.module.css";

const Banner = (props) => {
  return (
    <div className={styles.bannerImage}>
      <img src={props.imageUrl} alt="banner" />
      <h2>{props.department}</h2>
    </div>
  );
};

export default Banner;