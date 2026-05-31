import React, { use, useEffect, useState } from "react";
import SearchComponent from "./Search";
import CardComponent from "./Card";
import restaurantListing from "../utils/mockData";
import { Link } from "react-router";

/** Container Component */
const ContainerComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListFiltered, setRestaurantListFiltered] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulating an API call to fetch restaurant data
    fetchData();
  }, []);

  const fetchData = async () => {
    // Simulate fetching data from an API
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&offset=16&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantListFiltered(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    // Filter restaurants based on search query
    if (searchQuery) {
      const filteredList = restaurantListFiltered.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setRestaurantList(filteredList);
    } else {
      setRestaurantList(restaurantListFiltered);
    }
  }, [searchQuery, restaurantListFiltered]);


  //const arrData = Array.from({ length: 50 }, (_, index) => (`restaurant-${index + 1}`)); // Sample data for demonstration - retuns an array of restaurant names 
  
  const intialList = 10;
  const [list, setList] = useState([]);
  const [arrData, setarrData] = useState([]);
  useEffect(() => {
    // Simulating an API call to fetch restaurant data
    fetchPhotos();
  }, []);

  const fetchPhotos = async () =>{
    const photoData = await fetch("https://dummyjson.com/products");
    const jsonData = await photoData.json();
   
    const {products}  = jsonData;
    console.log(products);
    setList(products.slice(0,intialList));
    setarrData(products);
  }
 
  return (
    <>
      <div className="container">
        {/* <SearchComponent /> */}
        <div className="search-container text-center padding-20">
          <h1>Find the Best Restaurants Near You</h1>
          <input
            type="text"
            placeholder="Search for restaurants, dishes, etc."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </div>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            const filteredRestaurants = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setRestaurantList(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        <button className="btn btn-primary m-2">Delivery Restaurants</button>
        <div className="row">
          {restaurantList.map((restaurant) => (
            <Link to={"/restaurant/"+ restaurant.info.id}><CardComponent resData={restaurant} /></Link>
          ))}
        </div>
       <ul className="d-flex gap-10 flex-wrap list-style-none">
          {
          list.map((item) => (
            <li key={item.id} className="list-item"> 
              <img src={item.thumbnail} alt={item.title} className="list-image" width="100" height="100"/>
              <span className="d-block">{item.title}</span> 
            </li>
          ))
          }
          </ul>
          {arrData.length > list.length &&
        <button className="load-more-btn" onClick={()=>{
          const nextItems = arrData.slice(list.length, list.length + intialList);
          setList((prev) => [...prev, ...nextItems]);
        }}> Load more</button>
      }
      </div>
    </>
  );
};
export default ContainerComponent;
