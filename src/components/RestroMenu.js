import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
const RestroMenu = () => {
  const { resId } = useParams();
  let restroInfo = useRestroMenu(resId);
  console.log("restroInfo", restroInfo);
  const { name, cuisines, costForTwoMessage } =
    restroInfo?.[2]?.card?.card?.info || {name:"",cuisines:"",costForTwoMessage:""};
  const recommend =
    restroInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.findIndex(
      (obj) => {
        return obj?.card?.card?.title == "Recommended";
      }
    );
  console.log("index of recommend", recommend);
  const items =
    restroInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[
      recommend
    ]?.card?.card?.itemCards?.map((item) => {
      return {
        name: item?.card?.info?.name,
        id: item?.card?.info?.id,
        price: item?.card?.info?.price,
        image: item?.card?.info?.imageId,
      };
    });
    console.log("items in restro", items);
  return restroInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h1>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h1>
      <h2>Menu</h2>
      <ul>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default RestroMenu;
