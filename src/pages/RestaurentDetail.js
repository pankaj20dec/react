import React, { useState, useEffect, use } from 'react'
import RestaurantTitle from '../components/RestaurantTitle';
import ItemCategory from '../components/ItemCategory';
import { useParams } from 'react-router';
import { MENU_API } from '../utils/constants';

const RestaurentDetail = () => {
    const [resData, setResData] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        fetchRestaurantDetails();
    }, []);
    const fetchRestaurantDetails = async () => {
            // Simulating an API call to fetch restaurant details
            const response = await fetch(MENU_API + id);
            const jsonData = await response.json();
            const sectionDetail = jsonData?.data?.cards;
            //console.log(jsonData);
            //console.log(jsonData?.data?.cards);
            let allSections = [];
            //console.log(sectionDetail);
            sectionDetail.forEach((item, i) => {
                //console.log(item?.card?.card?.["@type"] || "groupedCard");
                if(item.card?.card?.["@type"]){
                    allSections.push(
                        item?.card?.card
                    );
                }
                const groupedCardItem = item?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                if (groupedCardItem) {
                    groupedCardItem.forEach((groupedItem) => {
                        if (groupedItem?.card?.card?.["@type"]) {
                            allSections.push(groupedItem?.card);
                        }
                    });
                }

            })
            console.log(allSections);
            setResData(allSections);

        }

  return (
    <>
    
        {resData.map((section, index)=>{
            const sectionType = section["@type"] || section.card?.["@type"];
                switch (sectionType) {
                    case "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2":
                        return <RestaurantTitle key={index} title={section.text} />;
                    case "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory":
                        return <ItemCategory key={index} catTitle={section.card.title} catItems={section.card.itemCards.map(item => item.card.info)} />;
                    default:
                        return null;
                }
            })}
    </>
  )
}

export default RestaurentDetail
