import  "../../src/assets/css/Components.css";

const Banner = (props) => {
  return (
    <div className="bannerImage">
      <img src={props.imageUrl} alt="banner" />
      <h2>{props.department}</h2>
    </div>
  );
};

export default Banner;