import { LOGO_URL } from "../utils/constants";
import React, { use, useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";
/** Header Component */
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("login");
  const [searchResults, setSearchResults] = useState([]);
  const [filterSearchResults, setFilterSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulating an API call to fetch user data
    searchAPI();
  }, []);
  const searchAPI = async () => {
    // lat and lng are hardcoded for simplicity
    const latLongData = await fetch('https://ipinfo.io/json');
    const latLong = await latLongData.json();
    const [lat, lng] = latLong.loc.split(',');
    
    // Simulate fetching data from an API
    const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${lng}&str=sweets`);
    const searchData = await data.json();
    //console.log(searchData);
    setSearchResults(searchData?.data?.suggestions);
  };

  //console.log("Header rendered");

  useEffect(()=>{
    //console.log("Use effect rendered");
  });



  return (
    <header className="d-flex justify-content-between align-items-center header">
      <div className="logo">
        <img src={LOGO_URL} alt="Restaurant Logo" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for restaurants, dishes, etc."
          className="search-input-header"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onKeyUp={(e) => {
            if(searchQuery.length > 1){
              const filteredResults = searchResults.filter((item) =>
                item.text.toLowerCase().includes(searchQuery.toLowerCase())
              );
              setFilterSearchResults(filteredResults);

            }else if(searchQuery.length === 0){  
              setFilterSearchResults([]);
            }
          }}
        />
        {searchQuery.length > 1 && (
        <div className="search-results">
          <div>
            {filterSearchResults.map((item, index) => (
              <div key={index}>
                <div className="d-flex align-items-center gap-10">
                   <img src={CDN_URL+item.cloudinaryId} alt="Restaurant Icon" className="restaurant-icon" width="50" height="50"/>
                  <div className="search-result-item">
                    {item.text}
                    <span className="search-result-restaurant-type d-block" style={{color: item.tagToDisplayColor}}>
                      {item.tagToDisplay ? item.tagToDisplay : ""}
                    </span>
                  </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
      <nav>
        <ul className="d-flex list-unstyled gap-10 list-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
          <button
            className="btn btn-primary"
            onClick={() => {
              setBtnName(btnName === "login" ? "logout" : "login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
