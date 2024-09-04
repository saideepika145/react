import Res from "./Res";
// import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // const [listOfRest,setListOfRest]=useState(restList);
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    let res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    console.log("data jdnked",data)
    // console.log(
    //   "json",
    //   data?.data?.cards[2].card?.card?.gridElements?.infoWithStyle.restaurants
    // );
    const restroIndex=data?.data?.cards.findIndex((obj)=>{ return obj?.card?.card?.gridElements?.infoWithStyle.restaurants != undefined})
    console.log("restroIndex",restroIndex)
    let extracted =
      data?.data?.cards[restroIndex].card?.card?.gridElements?.infoWithStyle.restaurants.map(
        (res) => {
          return res.info;
        }
      );
    // console.log("extracted", extracted);
    setListOfRest(extracted);
    setFilteredRest(extracted);
    setLoading(false);
  };
  const handleClick = () => {
    // console.log("before",restList.length)
    let filtered = listOfRest.filter((res) => res.avgRating > 4);
    // console.log("after",filtered.length)
    setListOfRest(filtered);
  };

  const onlineStatus=useOnlineStatus();
  if(!onlineStatus){
    //to test this u can navigate to inspect tab -> under -> network tab-> select offline in dropdown
    return <h1>Looks like you're offline.Please check your internet connection</h1>
  }
  // console.log("load",loading)
  return (
    <>
      {console.log("heee", listOfRest)}
      {listOfRest.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
            <button
              onClick={async() => {
            
                const filtered = listOfRest.filter((res) => {
                  return res.name
                    ?.toUpperCase()
                    .includes(searchText.toUpperCase());
                });
                setFilteredRest(filtered);
              }}
            >
              Search
            </button>
          </div>
          <button className="filter-btn" onClick={handleClick}>
            top rated restaurant
          </button>

          <div className="res-container">
            {
              // restaurant
              filteredRest.map((restaurant) => (
                <Link to={"/restro/"+restaurant.id}><Res key={restaurant.id} resData={restaurant} /></Link>
              ))
            }
          </div>
        </div>
      )}
      ;
    </>
  );
};
export default Body;
