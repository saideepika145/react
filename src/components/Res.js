import { CDN_URL } from "../utils/constants";
const Res = (props) => {
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRatingString,sla}=props.resData;
    return (
      <div className="res-card">
        <img alt="res" src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} rating</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

export default Res;