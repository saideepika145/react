import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
const useRestroMenu = (resId) => {
  console.log("resId in retromenu hook",resId)
  let [restroInfo, setRestroInfo] = useState(null);
  console.log("inside hook")
  //fetch data
  const fetchMenu = async () => {
    let url =
      MENU_API_URL + resId;
    console.log("url", url);
    const data = await fetch(url);
    const json = await data.json();
    console.log("json", json);
    setRestroInfo(json?.data?.cards);
  };
  useEffect(() => {
    console.log("inside use")
    fetchMenu();
  }, []);
  useEffect(() => {
    console.log("restro changed",restroInfo)
    // fetchMenu();
  }, [restroInfo]);
  return restroInfo;
};
export default useRestroMenu;
